//! Conceptually, a realm consists of a set of intrinsic objects, an ECMAScript global environment,
//! all of the ECMAScript code that is loaded within the scope of that global environment,
//! and other associated state and resources.
//!
//! A realm is represented in this implementation as a Realm struct with the fields specified from the spec.

mod intrinsics;
pub(crate) use intrinsics::Intrinsics;

use crate::{
    builtins::{self, typed_array::TypedArray},
    context::environments::{CompileTimeEnvironment, DeclarativeEnvironmentStack},
    object::{GlobalPropertyMap, JsObject, ObjectData, PropertyMap},
};
use boa_profiler::Profiler;

use self::intrinsics::{IntrinsicObjects, IteratorPrototypes};

/// Representation of a Realm.
///
/// In the specification these are called Realm Records.
#[derive(Debug)]
pub struct Realm {
    intrinsics: Intrinsics,
    global_object: JsObject,
    pub(crate) global_extensible: bool,
    pub(crate) global_property_map: PropertyMap,
    pub(crate) global_env: CompileTimeEnvironment,
}

impl Realm {
    #[inline]
    pub fn create() -> Self {
        let _timer = Profiler::global().start_event("Realm::create", "realm");
        // Create brand new global object
        // Global has no prototype to pass None to new_obj
        // Allow identification of the global object easily
        let global_object = JsObject::from_proto_and_data(None, ObjectData::global());

        let realm = Self {
            intrinsics: Intrinsics::default(),
            global_object,
            global_extensible: true,
            global_property_map: PropertyMap::default(),
            global_env: CompileTimeEnvironment::default(),
        };

        // Add new builtIns to Realm
        // At a later date this can be removed from here and called explicitly,
        // but for now we almost always want these default builtins
        let typed_array_constructor_constructor = TypedArray::init(&mut realm);
        realm.intrinsics.typed_array_constructor.constructor = typed_array_constructor_constructor;
        realm.intrinsics.typed_array_constructor.prototype = realm
            .intrinsics
            .standard_objects
            .typed_array_object()
            .prototype
            .clone();
        realm.intrinsics.iterator_prototypes = IteratorPrototypes::init(&mut realm);

        // Create intrinsics, add global objects here
        builtins::init(realm);

        realm.intrinsics.intrinsic_objects = IntrinsicObjects::init(&mut realm);

        realm
    }

    #[inline]
    pub(crate) fn global_object(&self) -> &JsObject {
        &self.global_object
    }

    #[inline]
    pub(crate) fn global_bindings(&self) -> &GlobalPropertyMap {
        self.global_property_map.string_property_map()
    }

    #[inline]
    pub(crate) fn global_bindings_mut(&mut self) -> &mut GlobalPropertyMap {
        self.global_property_map.string_property_map_mut()
    }

    /// Set the number of bindings on the global environment.
    #[inline]
    pub(crate) fn set_global_binding_number(&mut self) {
        let binding_number = self.global_env.get_binding_number();
        self.global_env.set_global_binding_number(binding_number);
    }
}
