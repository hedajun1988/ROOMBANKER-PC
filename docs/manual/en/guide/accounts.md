# Accounts

Only an administrator whose assigned scope permits account management can create or change accounts. The examples use sample accounts such as `admin@example.com`.

![Accounts list: 1 role filter, 2 status filter, 3 keyword search, 4 detail, 5 edit, 6 direct status toggle](/images/accounts/account-status-toggle.png){.manual-shot}

| No. | Control | Prerequisite and operation | Result, failure, permission, or risk |
|---|---|---|---|
| 1 | Role filter | Choose a role to narrow the visible account list. | It changes the list query; an empty result is valid. Only accounts in the current administrator's scope are returned. |
| 2 | Status filter | Choose Active or Disabled. | It combines with the role and keyword filters. |
| 3 | Keyword search | Enter a name or email keyword; press Enter or wait for the page search. | Matching rows refresh. Clearing the value restores the unfiltered scope. |
| 4 | Detail | Select the row's Detail action. | Shows read-only identity, company, role, phone, notes, and the permitted password-reset action. |
| 5 | Edit | Select Edit for an editable account. | Opens the edit dialog. The action is absent when the current role cannot change that target. |
| 6 | Enable / disable | Use the row toggle only after confirming the target and intended state. | Selecting the toggle changes the status directly, with no confirmation dialog. Protected Super Admin accounts cannot be disabled; failure restores the displayed state. This is a high-risk access change. |

## Create account

![Create Account: 1 name, 2 email, 3 company, 4 role, 5 hold-to-reveal password, 6 confirm, 7 cancel](/images/accounts/account-create.png){.manual-shot}

| No. | Control | Prerequisite and operation | Result, failure, permission, or risk |
|---|---|---|---|
| 1 | Name | Enter the new account display name. | Required before confirmation. |
| 2 | Email | Enter the account email. | Required; an invalid or duplicate email cannot be saved. |
| 3 | Company | Select the required company when the chosen role is company-scoped. | Available choices and allowed combinations are limited by the current administrator's role. |
| 4 | Role | Select an allowed role. | The role list is restricted by the creator's authority and company selection. Unsupported combinations remain unavailable or fail validation. |
| 5 | Hold to reveal password | Hold the eye control while entering the password. | It reveals only while held; it does not store the password in browser storage. Passwords must use allowed characters and be at least eight characters. |
| 6 | Confirm | Complete required fields, then confirm. | Success creates the account; an error leaves the form available for correction. |
| 7 | Cancel | Select Cancel. | Returns to the list without creating an account. |

## Detail, reset, and edit

![Account detail: 1 Reset Password, 2 Back to Account List](/images/accounts/account-detail.png){.manual-shot}

| No. | Control | Prerequisite and operation | Result, failure, permission, or risk |
|---|---|---|---|
| 1 | Reset Password | Open a non-Super-Admin account and select Reset Password. | The reset action is protected for Super Admin targets and is not shown for them. Resetting another administrator's password is a high-risk action. |
| 2 | Back to Account List | Select Back to Account List. | Returns without changing the selected account. |

![Reset Password: 1 new password, 2 confirmation, 3 hold-to-reveal, 4 cancel, 5 reset](/images/accounts/account-reset-password.png){.manual-shot}

| No. | Control | Prerequisite and operation | Result, failure, permission, or risk |
|---|---|---|---|
| 1 | New password | Enter the replacement password. | It must meet the allowed-character rule and minimum eight-character rule. |
| 2 | Confirm new password | Enter the same password again. | A mismatch or blank value prevents a valid reset. |
| 3 | Hold to reveal password | Hold to inspect the value while typing. | The value hides when released. |
| 4 | Cancel | Close the dialog without confirming. | No password request is sent. |
| 5 | Reset Password | Confirm only after verifying the target and both entries. | Updates the selected administrator password on success; errors leave the dialog available for correction. |

![Edit Account: 1 name, 2 read-only email, 3 company, 4 role, 5 cancel, 6 save](/images/accounts/account-edit.png){.manual-shot}

| No. | Control | Prerequisite and operation | Result, failure, permission, or risk |
|---|---|---|---|
| 1 | Name | Change the editable display name. | It is required. |
| 2 | Email | Review the email field. | It is read-only in this dialog. |
| 3 | Company | Change company only where the target role permits company binding. | The role selection may be recalculated after company changes. Invalid legacy bindings cannot be saved. |
| 4 | Role | Select an allowed target role. | Super Admin and normal user choices cannot be assigned through this editing path; company requirements are validated. |
| 5 | Cancel | Dismiss the dialog. | Discards unsaved local changes. |
| 6 | Save Changes | Validate the fields and save. | Saves the allowed change or reports a validation error. |
