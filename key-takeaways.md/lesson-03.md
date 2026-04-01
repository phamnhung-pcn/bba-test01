# Lesson 3: GIT & JavaScript

## GIT

1. Undo action

| Command | Meaning |
|-------|-------|
| git commit --amend | Edit message, update file for last commit |
| git restore --staged ‹file› | File staging → working directory |
| git reset HEAD~N | File repository → working directory for N files |

2. Branching model

*Always pull code before create new branch:
`git pull origin main`*

- Show list branch: `git branch`
- Create new branch: `git branch <branch_name›`
- Switch branch: `git checkout <branch_name›`
- Create and switch to a new branch: `git checkout -b ‹branch_name›` 
- Delete branch: `git branch -D <branch_name>`

3. ignore file

The `gitignore` file help specify which files and folders will be untracked by Git.

| Pattern | Meaning |
|-------|-------|
| file.txt | Ignore specific file |
| *.log | Ignore all .log file, |
| node_modle/ | Ignore folder |
| **/*.tmp | Ignore child folder |
| !important.log | **NOT** ignore this file |
| /TODO | Ignore file in original folder only |
| doc/**/*.txt| Ignore all .txt file in doc/ folder |

##Javascript basic

1. Convention

- snake_case
- kebab-case: đặt tên file và folder
- camelCase: đặt tên biến, hàm
- PascalCase: đặt tên class
- UPPER_CASE

2. console.log

3. Object
`const/let <variable_name> = {key1:value1, key2: value2}`

- Declaration
- Use
- Re-assign

```markdown
console.log(arr.length); 
```

4. Logical operator
`&&`: both sides of the proposition are correct
`||`: 1 of 2 sides correct
`! `: reverse the value of proposition

5. Array


6. Function