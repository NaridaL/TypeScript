/* @internal */
namespace ts.codefix {
    registerCodeFix({
        errorCodes: [Diagnostics.Cannot_find_name_0_Did_you_mean_the_instance_member_this_0.code],
        getCodeActions: (context: CodeFixContext) => {
            const sourceFile = context.sourceFile;
            const token = getTokenAtPosition(sourceFile, context.span.start, /*includeJsDocComment*/ false);
            if (token.kind !== SyntaxKind.Identifier) {
                return undefined;
            }
            const changeTracker = textChanges.ChangeTracker.fromContext(context);
            changeTracker.replaceNode(sourceFile, token, createPropertyAccess(createThis(), <Identifier>token));

            return [{
                description: getLocaleSpecificMessage(Diagnostics.Add_this_to_unresolved_variable),
                changes: changeTracker.getChanges()
            }];
        }
    });
    registerCodeFix({
        errorCodes: [Diagnostics.Cannot_find_name_0_Did_you_mean_the_static_member_1_0.code],
        getCodeActions: (context: CodeFixContext) => {
            const sourceFile = context.sourceFile;
            const token = getTokenAtPosition(sourceFile, context.span.start, /*includeJsDocComment*/ false);
            if (token.kind !== SyntaxKind.Identifier) {
                return undefined;
            }

            const container = getThisContainer(token, /*includeArrowFunctions*/ true);
            let location = container;
            let fixClassSymbol;
            while (location) {
                if (isClassLike(location.parent)) {
                    const classSymbol = location.parent.symbol;
                    if (!classSymbol) {
                        break;
                    }

                    // Check to see if a static member exists.
                    const constructorType = getTypeOfSymbol(classSymbol);
                    if (getPropertyOfType(constructorType, name)) {
                        error(errorLocation, Diagnostics.Cannot_find_name_0_Did_you_mean_the_static_member_1_0, diagnosticName(nameArg), symbolToString(classSymbol));
                        break;
                    }
                }

                location = location.parent;
            }

            const changeTracker = textChanges.ChangeTracker.fromContext(context);
            changeTracker.replaceNode(sourceFile, token, createPropertyAccess(createThis(), <Identifier>token));

            return [{
                description: getLocaleSpecificMessage(Diagnostics.Add_0_to_unresolved_variable),
                changes: changeTracker.getChanges()
            }];
        }
    });
}