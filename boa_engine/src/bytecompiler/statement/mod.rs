use crate::{bytecompiler::ByteCompiler, vm::Opcode};

use boa_ast::Statement;

mod block;
mod r#break;
mod r#continue;
mod r#if;
mod labelled;
mod r#loop;
mod switch;
mod r#try;
mod with;

impl ByteCompiler<'_, '_> {
    /// Compiles a [`Statement`] `boa_ast` node.
    pub fn compile_stmt(&mut self, node: &Statement, use_expr: bool, root_statement: bool) {
        match node {
            Statement::Var(var) => self.compile_var_decl(var),
            Statement::If(node) => self.compile_if(node, use_expr),
            Statement::ForLoop(for_loop) => {
                self.compile_for_loop(for_loop, None, use_expr);
            }
            Statement::ForInLoop(for_in_loop) => {
                self.compile_for_in_loop(for_in_loop, None, use_expr);
            }
            Statement::ForOfLoop(for_of_loop) => {
                self.compile_for_of_loop(for_of_loop, None, use_expr);
            }
            Statement::WhileLoop(while_loop) => {
                self.compile_while_loop(while_loop, None, use_expr);
            }
            Statement::DoWhileLoop(do_while_loop) => {
                self.compile_do_while_loop(do_while_loop, None, use_expr);
            }
            Statement::Block(block) => {
                self.compile_block(block, use_expr);
            }
            Statement::Labelled(labelled) => {
                self.compile_labelled(labelled, use_expr);
            }
            Statement::Continue(node) => {
                if root_statement && (use_expr || self.jump_control_info_has_use_expr()) {
                    self.emit_opcode(Opcode::PushUndefined);
                    self.emit_opcode(Opcode::SetReturnValue);
                }
                self.compile_continue(*node, use_expr);
            }
            Statement::Break(node) => {
                if root_statement && (use_expr || self.jump_control_info_has_use_expr()) {
                    self.emit_opcode(Opcode::PushUndefined);
                    self.emit_opcode(Opcode::SetReturnValue);
                }
                self.compile_break(*node, use_expr);
            }
            Statement::Throw(throw) => {
                self.compile_expr(throw.target(), true);
                self.emit(Opcode::Throw, &[]);
            }
            Statement::Switch(switch) => {
                self.compile_switch(switch, use_expr);
            }
            Statement::Return(ret) => {
                if let Some(expr) = ret.target() {
                    self.compile_expr(expr, true);
                    if self.in_async_generator {
                        self.emit_opcode(Opcode::Await);
                        self.emit_opcode(Opcode::GeneratorNext);
                    }
                } else {
                    self.emit_opcode(Opcode::PushUndefined);
                }
                self.emit_opcode(Opcode::SetReturnValue);
                self.emit_opcode(Opcode::Return);
            }
            Statement::Try(t) => self.compile_try(t, use_expr),
            Statement::Expression(expr) => {
                self.compile_expr(expr, use_expr);
                if use_expr {
                    self.emit_opcode(Opcode::SetReturnValue);
                }
            }
            Statement::With(with) => self.compile_with(with, use_expr),
            Statement::Empty => {}
        }
    }
}
