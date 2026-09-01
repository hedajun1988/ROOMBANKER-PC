# Permissions

This page presents role membership and its permission tree. The application organizes access across 11 modules. Only a Platform Super Admin may change the tree; other roles can inspect it but receive a read-only view.

![Permission role list: 1 members, 2 configure role permissions](/images/permissions/permission-role-list.png){.manual-shot}

| No. | Control | Prerequisite and operation | Result, failure, permission, or risk |
|---|---|---|---|
| 1 | Members | Select the member count for a role. | Opens Accounts filtered to that role, subject to the viewer's account scope. |
| 2 | Configure role permissions | Select the configuration action on a non-Super-Admin role. | Opens the role's permission tree. Platform Super Admin can edit; all other roles see the same tree as read-only. |

![Permission tree: 1 expand module, 2 parent permission, 3 child permission, 4 save, 5 cancel](/images/permissions/permission-tree-edit.png){.manual-shot}

| No. | Control | Prerequisite and operation | Result, failure, permission, or risk |
|---|---|---|---|
| 1 | Expand module | Select a module heading to show or hide its child permissions. | Changes only the displayed tree branch. |
| 2 | Parent permission | A Platform Super Admin selects or clears a module-level checkbox. | Selects or clears every child permission in that module. Other roles cannot change it. |
| 3 | Child permission | Select or clear an individual child checkbox. | The parent checkbox reflects full or partial child selection. |
| 4 | Save | Review the changed tree, then select Save. | Changes take effect after a successful save. Failure leaves the editor available for correction. Access changes are high risk. |
| 5 | Cancel | Select Cancel. | Returns to the role list and discards unsaved local changes. |

Typing a page address directly cannot bypass permissions. A missing menu item or return to another page means the current role has no access.
