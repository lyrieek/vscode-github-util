import * as vscode from 'vscode';
import * as path from 'path';
import { emojis } from './emojis';

export function activate(context: vscode.ExtensionContext) {

	console.log('Extension "vscode-github-util" is now active!');
	const activeEditor = vscode.window.activeTextEditor;
	const rootPath = vscode.workspace.rootPath;

	context.subscriptions.push(vscode.commands.registerCommand('vscode-github-util.showRootPath', () => {
		if (activeEditor && rootPath) {
			vscode.window.showInformationMessage(rootPath);
		}
	}));

	context.subscriptions.push(vscode.commands.registerCommand('vscode-github-util.assumeUnchanged', (e: any) => {
		if (activeEditor && rootPath) {
			if (e.original && e.original.scheme === 'file' && e.original.path) {
				vscode.window.showInformationMessage(e.original.path);
				const terminal = vscode.window.createTerminal('Assume Unchanged');
				terminal.sendText(`cd '${rootPath}'`);
				terminal.sendText('git update-index --assume-unchanged "' + e.original.path + '"');
				//.substr(rootPath.length + 1)
				terminal.show();
			} else {
				vscode.window.showErrorMessage(`Unable to operate on folder:'${e.original && e.original.path}'`);
			}
		}
	}));

	context.subscriptions.push(vscode.commands.registerCommand('vscode-github-util.noAssumeUnchanged', (e: any) => {
		if (activeEditor && rootPath) {
			if (e.scheme === 'file' && e.path) {
				vscode.window.showInformationMessage(e.path);
				const terminal = vscode.window.createTerminal('No Assume Unchanged');
				terminal.sendText(`cd '${rootPath}'`);
				terminal.sendText('git update-index --no-assume-unchanged "' + e.path + '"');
				terminal.show();
			} else {
				vscode.window.showErrorMessage(`Unable to operate on folder:'${e.path}'`);
			}
		}
	}));

	context.subscriptions.push(vscode.commands.registerCommand('vscode-github-util.showAllAssumeUnchanged', () => {
		if (activeEditor && rootPath) {
			const terminal = vscode.window.createTerminal('Show hide file');
			terminal.sendText(`cd '${rootPath}'`);
			terminal.sendText("git ls-files -v | grep '^h\ ' | awk '{print $2}'");
			terminal.show();
		}
	}));

	context.subscriptions.push(vscode.commands.registerCommand('vscode-github-util.showAllGitEmojis', () => {
		if (activeEditor && rootPath) {
			vscode.window.showQuickPick(emojis).then((e) => {
				if (!e || !e.code) {
					return;
				}
				vscode.env.clipboard.writeText(e.code);
				vscode.commands.executeCommand('git.commitAll');
			});
		}
	}));

}

export function deactivate() { }
