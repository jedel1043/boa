use boa_profiler::Profiler;

use crate::{
    builtins::{
        function::Function, regexp::regexp_string_iterator::RegExpStringIterator,
        string::string_iterator::StringIterator, ArrayIterator, ForInIterator, MapIterator,
        SetIterator, typed_array::TypedArray,
    },
    object::{JsObject, ObjectData, ObjectInitializer},
    property::PropertyDescriptor,
    symbol::WellKnownSymbols,
    Context, JsResult, JsValue,
};

use super::Realm;

#[derive(Debug)]
pub(crate) struct Intrinsics {
    /// Cached iterator prototypes.
    pub(crate) iterator_prototypes: IteratorPrototypes,

    /// Cached TypedArray constructor.
    pub(crate) typed_array_constructor: StandardConstructor,

    /// Cached standard objects and their prototypes.
    pub(crate) standard_objects: StandardObjects,

    /// Cached intrinsic objects
    pub(crate) intrinsic_objects: IntrinsicObjects,
}

impl Default for Intrinsics {
    fn default() -> Self {
        Self {
            iterator_prototypes: Default::default(),
            typed_array_constructor: Default::default(),
            standard_objects: Default::default(),
            intrinsic_objects: Default::default(),
        }
    }
}

#[derive(Debug, Default)]
pub struct IntrinsicObjects {
    throw_type_error: JsObject,
}

impl IntrinsicObjects {
    pub fn init(context: &mut Context) -> Self {
        Self {
            throw_type_error: create_throw_type_error(context),
        }
    }

    pub fn throw_type_error(&self) -> JsObject {
        self.throw_type_error.clone()
    }
}

fn create_throw_type_error(context: &mut Context) -> JsObject {
    fn throw_type_error(_: &JsValue, _: &[JsValue], context: &mut Context) -> JsResult<JsValue> {
        context.throw_type_error("invalid type")
    }

    let function = JsObject::from_proto_and_data(
        context.standard_objects().function_object().prototype(),
        ObjectData::function(Function::Native {
            function: throw_type_error,
            constructor: false,
        }),
    );

    let property = PropertyDescriptor::builder()
        .writable(false)
        .enumerable(false)
        .configurable(false);
    function.insert_property("name", property.clone().value("ThrowTypeError"));
    function.insert_property("length", property.value(0));

    function
}

/// Store a builtin constructor (such as `Object`) and its corresponding prototype.
#[derive(Debug, Clone)]
pub struct StandardConstructor {
    pub(crate) constructor: JsObject,
    pub(crate) prototype: JsObject,
}

impl Default for StandardConstructor {
    fn default() -> Self {
        Self {
            constructor: JsObject::empty(),
            prototype: JsObject::empty(),
        }
    }
}

impl StandardConstructor {
    /// Build a constructor with a defined prototype.
    fn with_prototype(prototype: JsObject) -> Self {
        Self {
            constructor: JsObject::empty(),
            prototype,
        }
    }

    /// Return the constructor object.
    ///
    /// This is the same as `Object`, `Array`, etc.
    #[inline]
    pub fn constructor(&self) -> JsObject {
        self.constructor.clone()
    }

    /// Return the prototype of the constructor object.
    ///
    /// This is the same as `Object.prototype`, `Array.prototype`, etc
    #[inline]
    pub fn prototype(&self) -> JsObject {
        self.prototype.clone()
    }
}

/// Cached core standard objects.
#[derive(Debug, Clone)]
pub struct StandardObjects {
    object: StandardConstructor,
    proxy: StandardConstructor,
    function: StandardConstructor,
    generator: StandardConstructor,
    generator_function: StandardConstructor,
    array: StandardConstructor,
    bigint: StandardConstructor,
    number: StandardConstructor,
    boolean: StandardConstructor,
    string: StandardConstructor,
    regexp: StandardConstructor,
    symbol: StandardConstructor,
    error: StandardConstructor,
    type_error: StandardConstructor,
    reference_error: StandardConstructor,
    range_error: StandardConstructor,
    syntax_error: StandardConstructor,
    eval_error: StandardConstructor,
    uri_error: StandardConstructor,
    map: StandardConstructor,
    set: StandardConstructor,
    typed_array: StandardConstructor,
    typed_int8_array: StandardConstructor,
    typed_uint8_array: StandardConstructor,
    typed_uint8clamped_array: StandardConstructor,
    typed_int16_array: StandardConstructor,
    typed_uint16_array: StandardConstructor,
    typed_int32_array: StandardConstructor,
    typed_uint32_array: StandardConstructor,
    typed_bigint64_array: StandardConstructor,
    typed_biguint64_array: StandardConstructor,
    typed_float32_array: StandardConstructor,
    typed_float64_array: StandardConstructor,
    array_buffer: StandardConstructor,
    data_view: StandardConstructor,
}

impl Default for StandardObjects {
    fn default() -> Self {
        Self {
            object: StandardConstructor::default(),
            proxy: StandardConstructor::default(),
            function: StandardConstructor::default(),
            generator: StandardConstructor::default(),
            generator_function: StandardConstructor::default(),
            array: StandardConstructor::default(),
            bigint: StandardConstructor::default(),
            number: StandardConstructor::with_prototype(JsObject::from_proto_and_data(
                None,
                ObjectData::number(0.0),
            )),
            boolean: StandardConstructor::with_prototype(JsObject::from_proto_and_data(
                None,
                ObjectData::boolean(false),
            )),
            string: StandardConstructor::with_prototype(JsObject::from_proto_and_data(
                None,
                ObjectData::string("".into()),
            )),
            regexp: StandardConstructor::default(),
            symbol: StandardConstructor::default(),
            error: StandardConstructor::default(),
            type_error: StandardConstructor::default(),
            reference_error: StandardConstructor::default(),
            range_error: StandardConstructor::default(),
            syntax_error: StandardConstructor::default(),
            eval_error: StandardConstructor::default(),
            uri_error: StandardConstructor::default(),
            map: StandardConstructor::default(),
            set: StandardConstructor::default(),
            typed_array: StandardConstructor::default(),
            typed_int8_array: StandardConstructor::default(),
            typed_uint8_array: StandardConstructor::default(),
            typed_uint8clamped_array: StandardConstructor::default(),
            typed_int16_array: StandardConstructor::default(),
            typed_uint16_array: StandardConstructor::default(),
            typed_int32_array: StandardConstructor::default(),
            typed_uint32_array: StandardConstructor::default(),
            typed_bigint64_array: StandardConstructor::default(),
            typed_biguint64_array: StandardConstructor::default(),
            typed_float32_array: StandardConstructor::default(),
            typed_float64_array: StandardConstructor::default(),
            array_buffer: StandardConstructor::default(),
            data_view: StandardConstructor::default(),
        }
    }
}

impl StandardObjects {
    #[inline]
    pub fn object_object(&self) -> &StandardConstructor {
        &self.object
    }

    #[inline]
    pub fn proxy_object(&self) -> &StandardConstructor {
        &self.proxy
    }

    #[inline]
    pub fn function_object(&self) -> &StandardConstructor {
        &self.function
    }

    #[inline]
    pub fn generator_object(&self) -> &StandardConstructor {
        &self.generator
    }

    #[inline]
    pub fn generator_function_object(&self) -> &StandardConstructor {
        &self.generator_function
    }

    #[inline]
    pub fn array_object(&self) -> &StandardConstructor {
        &self.array
    }

    #[inline]
    pub fn bigint_object(&self) -> &StandardConstructor {
        &self.bigint
    }

    #[inline]
    pub fn number_object(&self) -> &StandardConstructor {
        &self.number
    }

    #[inline]
    pub fn boolean_object(&self) -> &StandardConstructor {
        &self.boolean
    }

    #[inline]
    pub fn string_object(&self) -> &StandardConstructor {
        &self.string
    }

    #[inline]
    pub fn regexp_object(&self) -> &StandardConstructor {
        &self.regexp
    }

    #[inline]
    pub fn symbol_object(&self) -> &StandardConstructor {
        &self.symbol
    }

    #[inline]
    pub fn error_object(&self) -> &StandardConstructor {
        &self.error
    }

    #[inline]
    pub fn reference_error_object(&self) -> &StandardConstructor {
        &self.reference_error
    }

    #[inline]
    pub fn type_error_object(&self) -> &StandardConstructor {
        &self.type_error
    }

    #[inline]
    pub fn range_error_object(&self) -> &StandardConstructor {
        &self.range_error
    }

    #[inline]
    pub fn syntax_error_object(&self) -> &StandardConstructor {
        &self.syntax_error
    }

    #[inline]
    pub fn eval_error_object(&self) -> &StandardConstructor {
        &self.eval_error
    }

    #[inline]
    pub fn uri_error_object(&self) -> &StandardConstructor {
        &self.uri_error
    }

    #[inline]
    pub fn map_object(&self) -> &StandardConstructor {
        &self.map
    }

    #[inline]
    pub fn set_object(&self) -> &StandardConstructor {
        &self.set
    }

    #[inline]
    pub fn typed_array_object(&self) -> &StandardConstructor {
        &self.typed_array
    }

    #[inline]
    pub fn typed_int8_array_object(&self) -> &StandardConstructor {
        &self.typed_int8_array
    }

    #[inline]
    pub fn typed_uint8_array_object(&self) -> &StandardConstructor {
        &self.typed_uint8_array
    }

    #[inline]
    pub fn typed_uint8clamped_array_object(&self) -> &StandardConstructor {
        &self.typed_uint8clamped_array
    }

    #[inline]
    pub fn typed_int16_array_object(&self) -> &StandardConstructor {
        &self.typed_int16_array
    }

    #[inline]
    pub fn typed_uint16_array_object(&self) -> &StandardConstructor {
        &self.typed_uint16_array
    }

    #[inline]
    pub fn typed_uint32_array_object(&self) -> &StandardConstructor {
        &self.typed_uint32_array
    }

    #[inline]
    pub fn typed_int32_array_object(&self) -> &StandardConstructor {
        &self.typed_int32_array
    }

    #[inline]
    pub fn typed_bigint64_array_object(&self) -> &StandardConstructor {
        &self.typed_bigint64_array
    }

    #[inline]
    pub fn typed_biguint64_array_object(&self) -> &StandardConstructor {
        &self.typed_biguint64_array
    }

    #[inline]
    pub fn typed_float32_array_object(&self) -> &StandardConstructor {
        &self.typed_float32_array
    }

    #[inline]
    pub fn typed_float64_array_object(&self) -> &StandardConstructor {
        &self.typed_float64_array
    }

    #[inline]
    pub fn array_buffer_object(&self) -> &StandardConstructor {
        &self.array_buffer
    }

    #[inline]
    pub fn data_view_object(&self) -> &StandardConstructor {
        &self.data_view
    }
}

#[derive(Debug, Default)]
pub struct IteratorPrototypes {
    iterator_prototype: JsObject,
    array_iterator: JsObject,
    set_iterator: JsObject,
    string_iterator: JsObject,
    regexp_string_iterator: JsObject,
    map_iterator: JsObject,
    for_in_iterator: JsObject,
}

impl IteratorPrototypes {
    pub(crate) fn init(context: &mut Context) -> Self {
        let iterator_prototype = create_iterator_prototype(context);
        Self {
            array_iterator: ArrayIterator::create_prototype(iterator_prototype.clone(), context),
            set_iterator: SetIterator::create_prototype(iterator_prototype.clone(), context),
            string_iterator: StringIterator::create_prototype(iterator_prototype.clone(), context),
            regexp_string_iterator: RegExpStringIterator::create_prototype(
                iterator_prototype.clone(),
                context,
            ),
            map_iterator: MapIterator::create_prototype(iterator_prototype.clone(), context),
            for_in_iterator: ForInIterator::create_prototype(iterator_prototype.clone(), context),
            iterator_prototype,
        }
    }

    #[inline]
    pub fn array_iterator(&self) -> JsObject {
        self.array_iterator.clone()
    }

    #[inline]
    pub fn iterator_prototype(&self) -> JsObject {
        self.iterator_prototype.clone()
    }

    #[inline]
    pub fn set_iterator(&self) -> JsObject {
        self.set_iterator.clone()
    }

    #[inline]
    pub fn string_iterator(&self) -> JsObject {
        self.string_iterator.clone()
    }

    #[inline]
    pub fn regexp_string_iterator(&self) -> JsObject {
        self.regexp_string_iterator.clone()
    }

    #[inline]
    pub fn map_iterator(&self) -> JsObject {
        self.map_iterator.clone()
    }

    #[inline]
    pub fn for_in_iterator(&self) -> JsObject {
        self.for_in_iterator.clone()
    }
}

/// Create the `%IteratorPrototype%` object
///
/// More information:
///  - [ECMA reference][spec]
///
/// [spec]: https://tc39.es/ecma262/#sec-%iteratorprototype%-object
fn create_iterator_prototype(context: &mut Context) -> JsObject {
    let _timer = Profiler::global().start_event("Iterator Prototype", "init");

    let symbol_iterator = WellKnownSymbols::iterator();
    let iterator_prototype = ObjectInitializer::new(context)
        .function(
            |v, _, _| Ok(v.clone()),
            (symbol_iterator, "[Symbol.iterator]"),
            0,
        )
        .build();
    iterator_prototype
}
