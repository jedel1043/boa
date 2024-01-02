(function() {var type_impls = {
"boa_engine":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TypedArray\" class=\"impl\"><a class=\"src rightside\" href=\"src/boa_engine/builtins/typed_array/integer_indexed_object.rs.html#62-123\">source</a><a href=\"#impl-TypedArray\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"struct\" href=\"boa_engine/builtins/typed_array/integer_indexed_object/struct.TypedArray.html\" title=\"struct boa_engine::builtins::typed_array::integer_indexed_object::TypedArray\">TypedArray</a></h3></section></summary><div class=\"impl-items\"><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/boa_engine/builtins/typed_array/integer_indexed_object.rs.html#63-77\">source</a><h4 class=\"code-header\">pub(crate) const fn <a href=\"boa_engine/builtins/typed_array/integer_indexed_object/struct.TypedArray.html#tymethod.new\" class=\"fn\">new</a>(\n    viewed_array_buffer: <a class=\"struct\" href=\"boa_engine/object/jsobject/struct.JsObject.html\" title=\"struct boa_engine::object::jsobject::JsObject\">JsObject</a>,\n    kind: <a class=\"enum\" href=\"boa_engine/builtins/typed_array/enum.TypedArrayKind.html\" title=\"enum boa_engine::builtins::typed_array::TypedArrayKind\">TypedArrayKind</a>,\n    byte_offset: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u64.html\">u64</a>,\n    byte_length: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u64.html\">u64</a>,\n    array_length: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u64.html\">u64</a>\n) -&gt; Self</h4></section><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_detached\" class=\"method\"><a class=\"src rightside\" href=\"src/boa_engine/builtins/typed_array/integer_indexed_object.rs.html#87-93\">source</a><h4 class=\"code-header\">pub(crate) fn <a href=\"boa_engine/builtins/typed_array/integer_indexed_object/struct.TypedArray.html#tymethod.is_detached\" class=\"fn\">is_detached</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class=\"docblock\"><p>Abstract operation <code>IsDetachedBuffer ( arrayBuffer )</code>.</p>\n<p>Check if <code>[[ArrayBufferData]]</code> is null.</p>\n<p>More information:</p>\n<ul>\n<li><a href=\"https://tc39.es/ecma262/#sec-isdetachedbuffer\">ECMAScript reference</a></li>\n</ul>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.byte_offset\" class=\"method\"><a class=\"src rightside\" href=\"src/boa_engine/builtins/typed_array/integer_indexed_object.rs.html#97-99\">source</a><h4 class=\"code-header\">pub const fn <a href=\"boa_engine/builtins/typed_array/integer_indexed_object/struct.TypedArray.html#tymethod.byte_offset\" class=\"fn\">byte_offset</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u64.html\">u64</a></h4></section></summary><div class=\"docblock\"><p>Get the integer indexed object’s byte offset.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.kind\" class=\"method\"><a class=\"src rightside\" href=\"src/boa_engine/builtins/typed_array/integer_indexed_object.rs.html#102-104\">source</a><h4 class=\"code-header\">pub(crate) const fn <a href=\"boa_engine/builtins/typed_array/integer_indexed_object/struct.TypedArray.html#tymethod.kind\" class=\"fn\">kind</a>(&amp;self) -&gt; <a class=\"enum\" href=\"boa_engine/builtins/typed_array/enum.TypedArrayKind.html\" title=\"enum boa_engine::builtins::typed_array::TypedArrayKind\">TypedArrayKind</a></h4></section></summary><div class=\"docblock\"><p>Get the integer indexed object’s typed array kind.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.viewed_array_buffer\" class=\"method\"><a class=\"src rightside\" href=\"src/boa_engine/builtins/typed_array/integer_indexed_object.rs.html#108-110\">source</a><h4 class=\"code-header\">pub const fn <a href=\"boa_engine/builtins/typed_array/integer_indexed_object/struct.TypedArray.html#tymethod.viewed_array_buffer\" class=\"fn\">viewed_array_buffer</a>(&amp;self) -&gt; &amp;<a class=\"struct\" href=\"boa_engine/object/jsobject/struct.JsObject.html\" title=\"struct boa_engine::object::jsobject::JsObject\">JsObject</a></h4></section></summary><div class=\"docblock\"><p>Get a reference to the integer indexed object’s viewed array buffer.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.byte_length\" class=\"method\"><a class=\"src rightside\" href=\"src/boa_engine/builtins/typed_array/integer_indexed_object.rs.html#114-116\">source</a><h4 class=\"code-header\">pub const fn <a href=\"boa_engine/builtins/typed_array/integer_indexed_object/struct.TypedArray.html#tymethod.byte_length\" class=\"fn\">byte_length</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u64.html\">u64</a></h4></section></summary><div class=\"docblock\"><p>Get the integer indexed object’s byte length.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.array_length\" class=\"method\"><a class=\"src rightside\" href=\"src/boa_engine/builtins/typed_array/integer_indexed_object.rs.html#120-122\">source</a><h4 class=\"code-header\">pub const fn <a href=\"boa_engine/builtins/typed_array/integer_indexed_object/struct.TypedArray.html#tymethod.array_length\" class=\"fn\">array_length</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u64.html\">u64</a></h4></section></summary><div class=\"docblock\"><p>Get the integer indexed object’s array length.</p>\n</div></details></div></details>",0,"boa_engine::builtins::typed_array::integer_indexed_object::IntegerIndexed"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Trace-for-TypedArray\" class=\"impl\"><a class=\"src rightside\" href=\"src/boa_engine/builtins/typed_array/integer_indexed_object.rs.html#35\">source</a><a href=\"#impl-Trace-for-TypedArray\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"boa_engine/trait.Trace.html\" title=\"trait boa_engine::Trace\">Trace</a> for <a class=\"struct\" href=\"boa_engine/builtins/typed_array/integer_indexed_object/struct.TypedArray.html\" title=\"struct boa_engine::builtins::typed_array::integer_indexed_object::TypedArray\">TypedArray</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.trace\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/boa_engine/builtins/typed_array/integer_indexed_object.rs.html#35\">source</a><a href=\"#method.trace\" class=\"anchor\">§</a><h4 class=\"code-header\">unsafe fn <a href=\"boa_engine/trait.Trace.html#tymethod.trace\" class=\"fn\">trace</a>(&amp;self, tracer: &amp;mut <a class=\"struct\" href=\"boa_gc/trace/struct.Tracer.html\" title=\"struct boa_gc::trace::Tracer\">Tracer</a>)</h4></section></summary><div class='docblock'>Marks all contained <code>Gc</code>s. <a href=\"boa_engine/trait.Trace.html#tymethod.trace\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.trace_non_roots\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/boa_engine/builtins/typed_array/integer_indexed_object.rs.html#35\">source</a><a href=\"#method.trace_non_roots\" class=\"anchor\">§</a><h4 class=\"code-header\">unsafe fn <a href=\"boa_engine/trait.Trace.html#tymethod.trace_non_roots\" class=\"fn\">trace_non_roots</a>(&amp;self)</h4></section></summary><div class='docblock'>Trace handles located in GC heap, and mark them as non root. <a href=\"boa_engine/trait.Trace.html#tymethod.trace_non_roots\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.run_finalizer\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/boa_engine/builtins/typed_array/integer_indexed_object.rs.html#35\">source</a><a href=\"#method.run_finalizer\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"boa_engine/trait.Trace.html#tymethod.run_finalizer\" class=\"fn\">run_finalizer</a>(&amp;self)</h4></section></summary><div class='docblock'>Runs <a href=\"boa_engine/trait.Finalize.html#method.finalize\" title=\"method boa_engine::Finalize::finalize\"><code>Finalize::finalize</code></a> on this object and all\ncontained subobjects.</div></details></div></details>","Trace","boa_engine::builtins::typed_array::integer_indexed_object::IntegerIndexed"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-TypedArray\" class=\"impl\"><a class=\"src rightside\" href=\"src/boa_engine/builtins/typed_array/integer_indexed_object.rs.html#35\">source</a><a href=\"#impl-Clone-for-TypedArray\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"boa_engine/builtins/typed_array/integer_indexed_object/struct.TypedArray.html\" title=\"struct boa_engine::builtins::typed_array::integer_indexed_object::TypedArray\">TypedArray</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/boa_engine/builtins/typed_array/integer_indexed_object.rs.html#35\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"boa_engine/builtins/typed_array/integer_indexed_object/struct.TypedArray.html\" title=\"struct boa_engine::builtins::typed_array::integer_indexed_object::TypedArray\">TypedArray</a></h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.75.0/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","boa_engine::builtins::typed_array::integer_indexed_object::IntegerIndexed"],["<section id=\"impl-JsData-for-TypedArray\" class=\"impl\"><a class=\"src rightside\" href=\"src/boa_engine/builtins/typed_array/integer_indexed_object.rs.html#45-60\">source</a><a href=\"#impl-JsData-for-TypedArray\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"boa_engine/object/datatypes/trait.JsData.html\" title=\"trait boa_engine::object::datatypes::JsData\">JsData</a> for <a class=\"struct\" href=\"boa_engine/builtins/typed_array/integer_indexed_object/struct.TypedArray.html\" title=\"struct boa_engine::builtins::typed_array::integer_indexed_object::TypedArray\">TypedArray</a></h3></section>","JsData","boa_engine::builtins::typed_array::integer_indexed_object::IntegerIndexed"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Finalize-for-TypedArray\" class=\"impl\"><a class=\"src rightside\" href=\"src/boa_engine/builtins/typed_array/integer_indexed_object.rs.html#35\">source</a><a href=\"#impl-Finalize-for-TypedArray\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"boa_engine/trait.Finalize.html\" title=\"trait boa_engine::Finalize\">Finalize</a> for <a class=\"struct\" href=\"boa_engine/builtins/typed_array/integer_indexed_object/struct.TypedArray.html\" title=\"struct boa_engine::builtins::typed_array::integer_indexed_object::TypedArray\">TypedArray</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.finalize\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/boa_gc/trace.rs.html#49\">source</a><a href=\"#method.finalize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"boa_engine/trait.Finalize.html#method.finalize\" class=\"fn\">finalize</a>(&amp;self)</h4></section></summary><div class='docblock'>Cleanup logic for a type.</div></details></div></details>","Finalize","boa_engine::builtins::typed_array::integer_indexed_object::IntegerIndexed"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-TypedArray\" class=\"impl\"><a class=\"src rightside\" href=\"src/boa_engine/builtins/typed_array/integer_indexed_object.rs.html#35\">source</a><a href=\"#impl-Debug-for-TypedArray\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"boa_engine/builtins/typed_array/integer_indexed_object/struct.TypedArray.html\" title=\"struct boa_engine::builtins::typed_array::integer_indexed_object::TypedArray\">TypedArray</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/boa_engine/builtins/typed_array/integer_indexed_object.rs.html#35\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","boa_engine::builtins::typed_array::integer_indexed_object::IntegerIndexed"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Drop-for-TypedArray\" class=\"impl\"><a class=\"src rightside\" href=\"src/boa_engine/builtins/typed_array/integer_indexed_object.rs.html#35\">source</a><a href=\"#impl-Drop-for-TypedArray\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"boa_engine/builtins/typed_array/integer_indexed_object/struct.TypedArray.html\" title=\"struct boa_engine::builtins::typed_array::integer_indexed_object::TypedArray\">TypedArray</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.drop\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/boa_engine/builtins/typed_array/integer_indexed_object.rs.html#35\">source</a><a href=\"#method.drop\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/ops/drop/trait.Drop.html#tymethod.drop\" class=\"fn\">drop</a>(&amp;mut self)</h4></section></summary><div class='docblock'>Executes the destructor for this type. <a href=\"https://doc.rust-lang.org/1.75.0/core/ops/drop/trait.Drop.html#tymethod.drop\">Read more</a></div></details></div></details>","Drop","boa_engine::builtins::typed_array::integer_indexed_object::IntegerIndexed"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()