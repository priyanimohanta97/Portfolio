## 6. Git and GitHub — Owner Managed Only

**The project owner manages all Git and GitHub operations manually.**

The AI coding agent must never perform Git operations that modify repository state or GitHub.

### Strictly prohibited actions

- Never create, switch, rename, or delete Git branches.
- Never stage or unstage files.
- Never create, amend, or modify commits.
- Never push or pull changes.
- Never merge branches or create pull requests.
- Never reset, rebase, stash, clean, cherry-pick, or revert changes.
- Never force-push or modify Git history.
- Never change Git configuration, remotes, or repository settings.
- Never run scripts or tools that perform these operations indirectly.

### Permitted actions

- Read `git status` to understand the working tree.
- Read the current branch name.
- Inspect commit history and diffs using read-only commands.
- Report changed files and potential Git-related risks.
- Suggest branch names and commit messages for the owner to use manually.

### Required workflow

1. Before editing, inspect the repository state using read-only Git commands.
2. If the working tree contains existing changes, identify them and do not overwrite them.
3. Ask the owner to create and switch to a dedicated feature branch manually before implementation.
4. Implement only the approved feature.
5. Verify the changes and provide a clear report.
6. Wait for the owner to review and approve the changes.
7. After approval, provide suggested Git commands and a commit message for the owner to execute manually.
8. The owner independently decides when to commit, push, merge, or deploy.

If the owner has not created the required feature branch, do not perform Git operations to create it. Explain what needs to be done and wait.

**Important:** Never claim that changes have been committed or pushed unless the owner confirms it.

## 17. Absolute Rules

1. Never modify unrelated working features.
2. Never overwrite or discard existing work.
3. Never edit before inspecting the relevant code.
4. Never start another feature before review and acceptance.
5. Never claim unverified success.
6. Never expose secrets or commit sensitive credentials.
7. Never perform destructive operations without permission.
8. Never execute Git or GitHub operations that modify repository state.
9. Never introduce major architectural changes without approval.
10. When uncertain, stop, explain the risk, and ask.

**Final principle: Preserve what works, change only what is necessary, verify what you change, explain everything clearly, and leave all Git and GitHub management to the project owner.**