# Notifications

Open Notifications from the bell in the top bar.

![Single read: 1 Mark All Read, 2 read item, 3 unread item](/images/notifications/notification-single-read.png){.manual-shot}

| No. | Control | Prerequisite and operation | Result, failure, permission, or risk |
|---|---|---|---|
| 1 | Mark All Read | Select after reviewing outstanding notifications. | Starts the batch operation and disables repeat submission while it runs. |
| 2 | Read item | Review an item already marked read. | It remains readable. |
| 3 | Unread item | Select an unread card. | Marks only that notification read and updates the unread count. |

![Mark All Read progress: 1 progress dialog, 2 title, 3 remaining count](/images/notifications/notification-mark-all-progress.png){.manual-shot}

| No. | Control | Prerequisite and operation | Result, failure, permission, or risk |
|---|---|---|---|
| 1 | Progress dialog | It appears immediately after starting the batch action. | It is informational and has no cancel control. |
| 2 | Progress title | Review the active batch state. | Prevents treating a pending operation as completed. |
| 3 | Remaining count | Observe the unread count while processing continues. | Treat the action as successful only when the count reaches zero and the completion state appears. An error or stopped progress is not completion. |

![All read: 1 Mark All Read, 2 read item](/images/notifications/notification-mark-all-complete.png){.manual-shot}

| No. | Control | Prerequisite and operation | Result, failure, permission, or risk |
|---|---|---|---|
| 1 | Mark All Read | Available again after processing finishes. | Subsequent use affects only later unread items. |
| 2 | Read item | Review the completed list state. | All rows shown are read; pagination only changes the displayed page. |
