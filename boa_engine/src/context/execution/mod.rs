use crate::object::JsObject;

use super::{vm::Vm, realm::Realm};

pub struct ExecutionContext {
    pub(crate) function: Option<JsObject>,
    pub(crate) realm: Realm,
    // TODO: ScriptOrModule,
    pub(crate) environments: DeclarativeEnvironmentStack,
    pub(crate) compile_env: CompileTimeEnvironmentStack,

}
