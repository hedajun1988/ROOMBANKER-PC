# Remote configuration

Open **Remote Config** from the selected Hub. Available controls depend on the signed-in role and Hub state. Review the target and confirmation message before sending invitations, changing a PIN, transferring a role, enabling SSH, or restarting the Hub.

![User Management and App User cards: 1 User Management, 2 role, 3 room scope, 4 email, 5 Send Invitation, 6 App User, 7 Configure](/images/hubs/hub-remote-config-main.png){.manual-shot}

| No. | Control | Prerequisite and action | Result, disabled state, permission, or risk |
|---|---|---|---|
| 1 | User Management | Select the collapsible heading to show or hide the invitation and App User area. | Collapsing changes no Hub setting. |
| 2 | Invite role | Choose **Admin** or **Normal User** before composing an invitation. | Unavailable roles are disabled; Admin invitations use all rooms. |
| 3 | Room scope | For a Normal User, choose all rooms or permitted rooms. | A partial scope with no room cannot be sent. |
| 4 | Email | Enter the recipient email. | Empty or invalid input prevents an invitation. |
| 5 | Send Invitation | Review role, room scope, and email, then submit. | This high-risk action sends an invitation on success; rejection or failure leaves the user list unchanged. |
| 6 | App User | Expand or collapse existing remote App User cards. | Display/navigation only. |
| 7 | Configure | Open the intended App User card. | Unavailable if the user or current operator cannot be configured. |

![Invite User form: 1 role, 2 room scope, 3 email, 4 Send Invitation](/images/hubs/hub-remote-config-invite.png){.manual-shot}

| No. | Control | Prerequisite and action | Result, disabled state, permission, or risk |
|---|---|---|---|
| 1 | Role | Select a role the current operator may invite. | Choosing Admin resets scope to all rooms. |
| 2 | Room scope | For Normal User, choose all rooms or an allowed subset. | At least one room is required for a partial scope. |
| 3 | Email | Type the recipient email. | Required. If sending fails, check the email, role, and rooms before trying again. |
| 4 | Send Invitation | Submit only after reviewing all fields. | Success sends an invitation; error or disabled state sends nothing. |

![App User settings: 1 notification methods, 2 phone, 3 Remove Phone, 4 Add Phone, 5 Configure PIN, 6 transfer target, 7 Transfer Super Admin, 8 Save](/images/hubs/hub-app-user-settings.png){.manual-shot}

| No. | Control | Prerequisite and action | Result, disabled state, permission, or risk |
|---|---|---|---|
| 1 | Notification methods | Select alarm, malfunction, event, and operation delivery methods. | Main **Save** is required; failure leaves confirmed remote configuration unchanged. |
| 2 | Phone number | Enter a valid formatted number for the displayed App User. | SMS or phone-call methods can require a number; invalid input prevents saving. |
| 3 | Remove Phone | Available to Super Admin with more than one phone. | Removes that unsaved row; save is still required. |
| 4 | Add Phone | Available to Super Admin below three phones. | Adds an unsaved row. Normal App Users have at most one phone and do not receive this control. |
| 5 | Configure PIN | Open the PIN draft for an App User with a valid device-user-number prefix. | Main Save is still required after the draft. |
| 6 | Transfer target | Current Super Admin selects an eligible non-local App User. | Selection alone never transfers a role. |
| 7 | Transfer Super Admin | Review target and open confirmation. | High risk; only authorized current Super Admin can proceed. |
| 8 | Save | Save changed methods, phones, and staged PIN. | Busy, unavailable, invalid, or unchanged forms do not produce a remote update. |

![App User PIN dialog: 1 fixed prefix, 2 editable digits, 3 Cancel, 4 Save](/images/hubs/hub-app-user-pin.png){.manual-shot}

| No. | PIN control | Prerequisite and action | Result or failure |
|---|---|---|---|
| 1 | Fixed prefix | Read the two digits derived from device-user number. | Read-only. |
| 2 | PIN digits | Enter the four numeric suffix digits. | Non-numeric or incomplete input cannot create a valid draft. |
| 3 | Cancel | Close the draft dialog. | Discards unsaved edits. |
| 4 | Save | Save a valid draft, then use main settings Save. | The PIN changes only after the main settings are saved successfully. |

![Super Admin transfer confirmation: 1 consequence, 2 Cancel, 3 Confirm](/images/hubs/hub-super-admin-transfer-confirm.png){.manual-shot}

| No. | Confirmation control | Action | Result, failure, or high-risk consequence |
|---|---|---|---|
| 1 | Consequence | Recheck source and target. | Confirmation exchanges role, device-user number, and room scope; clears PIN; moves notification selections; and clears the second and third PC phone numbers. |
| 2 | Cancel | Close the confirmation. | No transfer request is sent. |
| 3 | Confirm | Send the authorized transfer. | Treat the transfer as complete only after a success message appears and the user list shows the new roles. If an error appears, check the list first; do not transfer again when the role has already changed. |

![Maintenance: 1 Maintenance section, 2 SSH toggle, 3 Restart Hub](/images/hubs/hub-maintenance.png){.manual-shot}

| No. | Control | Prerequisite and action | Result, disabled state, permission, or risk |
|---|---|---|---|
| 1 | Maintenance | Expand or collapse maintenance controls. | Display only; sends no remote command. |
| 2 | SSH toggle | Authorized operators enable or disable SSH only after checking the target Hub. | SSH is a secure remote maintenance channel. If the switch returns to its previous state or no success message appears, do not assume the setting changed or retry repeatedly. |
| 3 | Restart Hub | Open confirmation after checking the operational window. | After confirmation, wait for Hub status and monitoring results. A failed action or no success message is not a confirmed restart. |

![Restart Hub confirmation: 1 warning, 2 Cancel, 3 Confirm](/images/hubs/hub-restart-confirm.png){.manual-shot}

| No. | Confirmation control | Action | Result, failure, or risk |
|---|---|---|---|
| 1 | Warning | Verify Hub name and SN. | The displayed 30-60 second offline period is only an estimate; use Hub status and monitoring to decide when restart is complete. |
| 2 | Cancel | Close the dialog. | No restart command is sent. |
| 3 | Confirm | Send authorized restart. | Wait for Hub status and monitoring results; closing the dialog is not success. |
