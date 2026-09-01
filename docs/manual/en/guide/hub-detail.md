# Hub details

![Hub details: 1 details tab, 2 Remote Config, 3 Sub-devices, 4 Edit, 5 Disarm, 6 custom mode](/images/hubs/hub-detail-main.png){.manual-shot}

| No. | Control | Prerequisite, action, result, failure or permission |
|---|---|---|
| 1 | Hub details | Shows the selected Hub's name, SN, ownership, status, and current controls. |
| 2 | Remote Config | Opens configuration for the selected Hub. Its user, SSH, and restart controls are role-gated and documented separately. |
| 3 | Sub-devices | Opens the selected Hub's sub-device list; it does not physically remove any device. |
| 4 | Edit | Authorized users change the Hub name or company assignment. A rejected request leaves the prior assignment unchanged. |
| 5 | Disarm | Opens the arm/disarm confirmation for the selected Hub. Confirm the target and current security context before submitting. |
| 6 | Custom mode | Select a configured custom mode only when it is enabled. Loading or disabled controls must not be retried as a state change. |

![Hub logs: 1 Download, 2 Delete, 3 Get Log, 4 Export Messages to Excel](/images/hubs/hub-detail-logs.png){.manual-shot}

| No. | Log or export control | Prerequisite, action, result, failure or permission |
|---|---|---|
| 1 | Download | Downloads an available selected log. Missing download metadata or authorization failure reports an error without changing Hub ownership. |
| 2 | Delete | Opens the deletion confirmation for the selected log; it does not delete until confirmed. |
| 3 | Get Log | Collects logs from the Hub and refreshes the list after success. On failure, the current list remains unchanged. |
| 4 | Export Messages to Excel | The Export card sends an export request for this Hub's messages. Failure leaves the Hub and log records unchanged. |

![Delete Hub log confirmation: 1 warning, 2 Cancel, 3 OK](/images/hubs/hub-log-delete-confirm.png){.manual-shot}

| No. | Confirmation control | Use and risk |
|---|---|---|
| 1 | Warning | Check that the displayed log is the intended retrieval before proceeding. |
| 2 | Cancel | Closes the dialog without deleting the log. |
| 3 | OK | Deletes only the selected log after a successful authorized request. It does not unbind the Hub, delete its physical SN, or remove sub-devices. |
