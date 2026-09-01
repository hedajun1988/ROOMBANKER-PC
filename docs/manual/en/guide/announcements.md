# Announcements

Platform Super Administrators and administrators can maintain announcements. Other roles can read the list but do not receive New, Edit, or Delete actions.

![Create announcement: 1 title, 2 content, 3 cancel, 4 save](/images/announcements/announcement-create.png){.manual-shot}

| No. | Control | Prerequisite and operation | Result, failure, permission, or risk |
|---|---|---|---|
| 1 | Title | Enter a non-empty announcement title. | Required; blank input shows a local validation error. |
| 2 | Content | Enter non-empty announcement content. | Required; blank input shows a local validation error. |
| 3 | Cancel | Close the dialog before Save. | Discards local entry and sends no request. |
| 4 | Save | A permitted maintainer saves valid fields. | Publishes the new record on success; failure keeps the form available. |

![Edit announcement: 1 title, 2 content, 3 cancel, 4 save](/images/announcements/announcement-edit.png){.manual-shot}

| No. | Control | Prerequisite and operation | Result, failure, permission, or risk |
|---|---|---|---|
| 1 | Title | Open Edit and revise the existing title. | Required before saving. |
| 2 | Content | Revise the existing body. | Required before saving. |
| 3 | Cancel | Close the edit dialog. | Leaves the published record unchanged. |
| 4 | Save | Save permitted changes. | Success updates the record; failure retains the existing announcement. |

![Announcement actions: 1 New Announcement, 2 Edit, 3 Delete](/images/announcements/announcement-delete-action.png){.manual-shot}

| No. | Control | Prerequisite and operation | Result, failure, permission, or risk |
|---|---|---|---|
| 1 | New Announcement | Select to open the create dialog. | Visible only to maintenance roles. |
| 2 | Edit | Select on a record. | Opens the populated edit dialog. |
| 3 | Delete | Verify the target before selecting Delete. | Deletion happens directly with no confirmation dialog. This is high risk; failure leaves the record listed. |
