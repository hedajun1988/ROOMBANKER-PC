# Companies

**Company actions.** The create, edit, detail, employee, and owner-transfer states are shown below. Authorized administrators can also open associated Hubs or delete a company. After deletion, the company no longer appears in the available list and related management cannot continue; confirm the target before submitting.

![Create Company form: 1 company name, 2 type, 3 logo, 4 save](/images/companies/company-create.png){.manual-shot}

| No. | Create control | Use |
|---|---|---|
| 1 | Company name | Enter the required name. Contact name, phone, and email are also required fields; invalid values prevent saving. |
| 2 | Type | Select the company type. |
| 3 | Logo | Choose an image for preview before saving. |
| 4 | Save | Create the validated company. Cancel closes the form without saving. |

![Edit Company form: 1 company name, 2 type, 3 logo, 4 save changes](/images/companies/company-edit.png){.manual-shot}

| No. | Edit control | Use |
|---|---|---|
| 1 | Company name | Review and change the selected company name; contact, phone, and email remain required. |
| 2 | Type | Change the company type only when the operating model permits it. |
| 3 | Logo | Select a replacement image for preview before saving. |
| 4 | Save Changes | Update the selected company. A failed request keeps the existing record; Cancel closes without changing it. |

![Company detail and employees: 1 edit company, 2 add employee, 3 edit employee, 4 transfer owner, 5 associated Hubs](/images/companies/company-detail-employees.png){.manual-shot}

| No. | Detail or employee control | Prerequisite, action, result, failure or role |
|---|---|---|
| 1 | Edit company | Opens the prefilled company form for an authorized administrator. |
| 2 | Add Employee | Opens the employee form for the selected company; a permitted management role is required. |
| 3 | Edit employee | Updates the selected employee's permitted fields. The current employee cannot use row actions intended for other employees. |
| 4 | Transfer owner | Available only to an authorized operator and an eligible non-owner target. It opens a confirmation instead of transferring immediately. |
| 5 | Associated Hubs | Opens the Hubs associated with this company; it does not change their binding. |

![Add Employee form: 1 email, 2 role, 3 phone, 4 save](/images/companies/company-employee-form.png){.manual-shot}

| No. | Employee form control | Use |
|---|---|---|
| 1 | Email | Enter the employee email for the selected company. Validation or a duplicate account blocks saving. |
| 2 | Role | Select only a role the current operator may assign. |
| 3 | Phone | Optionally provide the employee phone number. |
| 4 | Save | Creates the employee after validation; Cancel or Close leaves the company unchanged. |

![Owner transfer confirmation: 1 consequence, 2 cancel, 3 confirm](/images/companies/company-owner-transfer.png){.manual-shot}

| No. | Owner transfer control | Use and risk |
|---|---|---|
| 1 | Transfer consequence | Verify the named eligible employee and business ownership before proceeding. |
| 2 | Cancel | Close the confirmation without submitting a transfer. |
| 3 | Confirm | Transfers company ownership when the authorized request succeeds. This can change who administers employees and Hubs; a rejected request leaves the current owner unchanged. |

![Employee row actions: 1 detail, 2 delete, 3 enable or disable](/images/companies/company-employee-actions.png){.manual-shot}

| No. | Employee action | Use and result |
|---|---|---|
| 1 | Detail | Opens the selected employee's read-only information. |
| 2 | Delete | Opens confirmation; cancel leaves the employee unchanged. |
| 3 | Enable or disable | Changes the intended status directly when authorized. |

![Employee detail: 1 Back to company](/images/companies/company-employee-detail.png){.manual-shot}

| No. | Control | Use |
|---|---|---|
| 1 | Back to company | Returns to the company employee list without changes. |

![Delete employee confirmation: 1 consequence, 2 cancel, 3 confirm](/images/companies/company-employee-delete-confirm.png){.manual-shot}

| No. | Control | Use and risk |
|---|---|---|
| 1 | Deletion consequence | Verify the employee identity and company before proceeding. |
| 2 | Cancel | Closes without changing the employee. |
| 3 | Confirm | Deletes the employee only when the authorized request succeeds. |

![Delete company confirmation: 1 consequence, 2 cancel, 3 confirm](/images/companies/company-delete-confirm.png){.manual-shot}

| No. | Control | Use and risk |
|---|---|---|
| 1 | Deletion consequence | Verify the company because it will no longer appear in the available company list. |
| 2 | Cancel | Closes without changing the company. |
| 3 | Confirm | Deletes the authorized company. It becomes unavailable after success; a failure leaves the record unchanged. |
