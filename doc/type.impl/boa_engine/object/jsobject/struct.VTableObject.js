(function() {var type_impls = {
"boa_engine":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Drop-for-VTableObject%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/boa_engine/object/jsobject.rs.html#63\">source</a><a href=\"#impl-Drop-for-VTableObject%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"boa_engine/object/trait.NativeObject.html\" title=\"trait boa_engine::object::NativeObject\">NativeObject</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"boa_engine/object/jsobject/struct.VTableObject.html\" title=\"struct boa_engine::object::jsobject::VTableObject\">VTableObject</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.drop\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/boa_engine/object/jsobject.rs.html#63\">source</a><a href=\"#method.drop\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/ops/drop/trait.Drop.html#tymethod.drop\" class=\"fn\">drop</a>(&amp;mut self)</h4></section></summary><div class='docblock'>Executes the destructor for this type. <a href=\"https://doc.rust-lang.org/1.75.0/core/ops/drop/trait.Drop.html#tymethod.drop\">Read more</a></div></details></div></details>","Drop","boa_engine::object::jsobject::ErasedVTableObject"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Finalize-for-VTableObject%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/boa_engine/object/jsobject.rs.html#63\">source</a><a href=\"#impl-Finalize-for-VTableObject%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"boa_engine/object/trait.NativeObject.html\" title=\"trait boa_engine::object::NativeObject\">NativeObject</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"boa_engine/trait.Finalize.html\" title=\"trait boa_engine::Finalize\">Finalize</a> for <a class=\"struct\" href=\"boa_engine/object/jsobject/struct.VTableObject.html\" title=\"struct boa_engine::object::jsobject::VTableObject\">VTableObject</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.finalize\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/boa_gc/trace.rs.html#49\">source</a><a href=\"#method.finalize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"boa_engine/trait.Finalize.html#method.finalize\" class=\"fn\">finalize</a>(&amp;self)</h4></section></summary><div class='docblock'>Cleanup logic for a type.</div></details></div></details>","Finalize","boa_engine::object::jsobject::ErasedVTableObject"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Trace-for-VTableObject%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/boa_engine/object/jsobject.rs.html#63\">source</a><a href=\"#impl-Trace-for-VTableObject%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"boa_engine/object/trait.NativeObject.html\" title=\"trait boa_engine::object::NativeObject\">NativeObject</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"boa_engine/trait.Trace.html\" title=\"trait boa_engine::Trace\">Trace</a> for <a class=\"struct\" href=\"boa_engine/object/jsobject/struct.VTableObject.html\" title=\"struct boa_engine::object::jsobject::VTableObject\">VTableObject</a>&lt;T&gt;<span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"boa_gc/cell/struct.GcRefCell.html\" title=\"struct boa_gc::cell::GcRefCell\">GcRefCell</a>&lt;<a class=\"struct\" href=\"boa_engine/object/struct.Object.html\" title=\"struct boa_engine::object::Object\">Object</a>&lt;T&gt;&gt;: <a class=\"trait\" href=\"boa_engine/trait.Trace.html\" title=\"trait boa_engine::Trace\">Trace</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.trace\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/boa_engine/object/jsobject.rs.html#63\">source</a><a href=\"#method.trace\" class=\"anchor\">§</a><h4 class=\"code-header\">unsafe fn <a href=\"boa_engine/trait.Trace.html#tymethod.trace\" class=\"fn\">trace</a>(&amp;self, tracer: &amp;mut <a class=\"struct\" href=\"boa_gc/trace/struct.Tracer.html\" title=\"struct boa_gc::trace::Tracer\">Tracer</a>)</h4></section></summary><div class='docblock'>Marks all contained <code>Gc</code>s. <a href=\"boa_engine/trait.Trace.html#tymethod.trace\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.trace_non_roots\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/boa_engine/object/jsobject.rs.html#63\">source</a><a href=\"#method.trace_non_roots\" class=\"anchor\">§</a><h4 class=\"code-header\">unsafe fn <a href=\"boa_engine/trait.Trace.html#tymethod.trace_non_roots\" class=\"fn\">trace_non_roots</a>(&amp;self)</h4></section></summary><div class='docblock'>Trace handles located in GC heap, and mark them as non root. <a href=\"boa_engine/trait.Trace.html#tymethod.trace_non_roots\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.run_finalizer\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/boa_engine/object/jsobject.rs.html#63\">source</a><a href=\"#method.run_finalizer\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"boa_engine/trait.Trace.html#tymethod.run_finalizer\" class=\"fn\">run_finalizer</a>(&amp;self)</h4></section></summary><div class='docblock'>Runs <a href=\"boa_engine/trait.Finalize.html#method.finalize\" title=\"method boa_engine::Finalize::finalize\"><code>Finalize::finalize</code></a> on this object and all\ncontained subobjects.</div></details></div></details>","Trace","boa_engine::object::jsobject::ErasedVTableObject"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()