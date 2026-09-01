# Sub-devices

Open **Sub-devices** from the selected Hub. The examples show sample devices and rooms. Confirm the target before deleting, editing, or adding a device.

![Sub-device list: 1 type, 2 model, 3 status, 4 serial search, 5 detail, 6 edit, 7 delete](/images/hubs/hub-subdevices-list.png){.manual-shot}

| No. | Control | Prerequisite and action | Result, failure, permission, or risk |
|---|---|---|---|
| 1 | Type filter | Choose an available device type. | Reloads the list with that type; disabled while filter options load. |
| 2 | Model filter | Choose an available model. | Narrows the list; invalid options are reset after filter refresh. |
| 3 | Status filter | Choose Online, Offline, Disabled, or all. | Reloads records only; it does not change device status. |
| 4 | Serial search | Enter a keyword or serial fragment. | Reloads the list. On a list or option failure, use the visible Retry control after checking the connection. |
| 5 | Detail | Open the selected row. | Shows read-only identity, firmware, battery, and signal fields. |
| 6 | Edit | Open the selected row's name and room form. | Requires an existing selected Hub and permitted update access. |
| 7 | Delete | Open deletion confirmation for the selected row. | High risk; no deletion occurs until confirmation succeeds. |

![Sub-device detail: 1 Delete Device, 2 Back to Sub-devices](/images/hubs/hub-subdevice-detail.png){.manual-shot}

| No. | Control | Action and result |
|---|---|---|
| 1 | Delete Device | Opens a confirmation for this device. It does not delete until Confirm is submitted by an authorized user. |
| 2 | Back to Sub-devices | Returns to the list without changing the device. |

![Edit existing sub-device: 1 name, 2 room, 3 new room, 4 Cancel, 5 Confirm](/images/hubs/hub-subdevice-edit-room.png){.manual-shot}

| No. | Control | Prerequisite and action | Result or failure |
|---|---|---|---|
| 1 | Device Name | Enter the intended display name. | Empty name falls back to the current name on save. |
| 2 | Room | Select an existing Hub room. | The room change takes effect only after Confirm. |
| 3 | Or enter new room | Enter a new room name instead of selecting an existing room. | Confirm first creates the room, then updates the device. Failure leaves the form open for retry. |
| 4 | Cancel | Close the form. | Discards local edits; no request is sent. |
| 5 | Confirm | Save name and selected/new room. | Requires permission; a failure keeps the form open and leaves the device data unchanged. |

![Delete sub-device confirmation: 1 warning, 2 Cancel, 3 Confirm](/images/hubs/hub-subdevice-delete-confirm.png){.manual-shot}

| No. | Control | Action and risk |
|---|---|---|
| 1 | Warning | Verify the device name and SN before continuing. |
| 2 | Cancel | Closes the dialog without deletion. |
| 3 | Confirm | Permanently removes the selected sub-device from this Hub after a successful authorized request. |

## Add Sub-device

![Disarmed registration entry: 1 step, 2 Confirm LED, 3 Exit registration](/images/hubs/hub-add-subdevice-allowed.png){.manual-shot}

| No. | Control | Prerequisite and action | Result, failure, or risk |
|---|---|---|---|
| 1 | Registration step | Check the Hub state before enabling registration. | Registration can start only when the Hub is explicitly **disarmed**. |
| 2 | Confirmed - LED Is Blinking Green | Confirm the Hub LED, then continue to device registration instructions. | Moves to the device-ready step only; it does not add a device. |
| 3 | Exit Registration Mode | Leave an active registration process. | Returns to the list after completion. |

![Registration scan: 1 scan progress, 2 Edit, 3 Next](/images/hubs/hub-add-subdevice-scan.png){.manual-shot}

| No. | Control | Prerequisite and action | Result, failure, or risk |
|---|---|---|---|
| 1 | Scan progress | Put the physical device in registration mode, then choose **Next - Device Is Ready**. | The page continues looking for devices during scanning. No result remains waiting; a scan error keeps the registration waiting state and may be retried from the flow. |
| 2 | Edit | Open a discovered device's name and room form. | Uses the same name, room, new-room, Cancel, and Confirm behavior shown above. |
| 3 | Next - Complete Registration | Review discovered devices, then continue. | Opens the final confirmation state; no device has been added yet. |

![Edit discovered sub-device: 1 name, 2 room, 3 new room, 4 Cancel, 5 Confirm](/images/hubs/hub-add-subdevice-edit.png){.manual-shot}

| No. | Control | Action and result |
|---|---|---|
| 1 | Device Name | Change the discovered device display name before completion. |
| 2 | Room | Select an existing room for the discovered device. |
| 3 | Or enter new room | Enter a room name; confirmation creates the room before updating the device. |
| 4 | Cancel | Leaves discovered device information unchanged. |
| 5 | Confirm | Updates the discovered device; failure keeps the form available for retry. |

![Ready to confirm: 1 Complete](/images/hubs/hub-add-subdevice-confirm.png){.manual-shot}

| No. | Control | Action and result |
|---|---|---|
| 1 | Complete | Exits registration and refreshes the sub-device list. Completion is successful only after all steps finish; do not use it twice while busy. |

![Armed Hub blocked: 1 Hub List, 2 Hub Detail, 3 Add Sub-device](/images/hubs/hub-add-subdevice-armed-blocked.png){.manual-shot}

| No. | Control or state | Action and safety restriction |
|---|---|---|
| 1 | Hub List | Return to a different Hub without starting a registration command. |
| 2 | Hub Detail | Inspect the target Hub state before retrying. |
| 3 | Add Sub-device | Armed, unknown, or unreadable Hub states are blocked. Disarm the correct Hub and confirm its state before retrying; never bypass this restriction. |
