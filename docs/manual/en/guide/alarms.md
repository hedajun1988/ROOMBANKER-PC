# Alarm messages

Use the status filter and keyword search in the alarm list, then select a card to open its detail. The examples show alarm information for illustration.

![New alarm detail: 1 notes, 2 Start Processing, 3 Cancel](/images/alarms/alarm-detail-new.png){.manual-shot}

| No. | Control | Prerequisite and action | Result, failure, permission, or risk |
|---|---|---|---|
| 1 | Processing Notes | Read type, Hub, company, time, status, detail, and Processing History, then enter a nonempty handling note. | Empty notes prevent processing. History records the alarm creation and each later state change. |
| 2 | Start Processing | Verify the alarm, then submit a note for a **New** alarm. | Selecting this action starts processing directly, with no separate confirmation dialog. Success appends processing history and returns to the list; failure leaves the recorded state unchanged. |
| 3 | Cancel | Close the detail panel. | Discards an unsent note and does not change alarm state. |

![Processing alarm: 1 notes, 2 Choose File, 3 Close Alarm, 4 Cancel](/images/alarms/alarm-detail-processing.png){.manual-shot}

| No. | Control | Prerequisite and action | Result, failure, permission, or risk |
|---|---|---|---|
| 1 | Processing Notes | Enter a nonempty closure note after checking the processing history. | Empty notes prevent closing. |
| 2 | Choose File | Optionally select an image while the alarm is processing. | The control accepts images; upload or preview errors keep closing unavailable until upload completes. Do not attach sensitive media. |
| 3 | Close Alarm | Verify the alarm and closure note, with an image only after upload completes. | Selecting this action closes the alarm directly, with no separate confirmation dialog. Success appends closed history; failure leaves the confirmed status unchanged. |
| 4 | Cancel | Close the detail panel. | Discards unsent note and attachment selection. |

![Closed alarm list: 1 status filter, 2 keyword search, 3 alarm card](/images/alarms/alarm-closed-list.png){.manual-shot}

| No. | Control | Prerequisite and action | Result |
|---|---|---|---|
| 1 | Status filter | Choose New, Processing, Closed, or the available aggregate state. | Reloads matching alarm cards only; it does not alter status. |
| 2 | Keyword search | Enter an originator or matching keyword. | Wait for matching cards to update, or press Enter to search immediately. |
| 3 | Alarm card | Open a listed alarm to inspect its details and history. | A closed alarm displays history but no further process action. |

Only authorized users can start or close alarms. Each successful status update appends handling history. The manual does not claim a confirmation dialog because the current page performs status actions directly after the required note validation.
