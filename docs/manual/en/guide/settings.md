# Settings

Settings applies to the current signed-in account. Profile save and language selection remain available above the sections shown here; the email field is read-only.

![Settings overview: 1 Save Changes, 2 Language, 3 Delete My Account](/images/settings/settings-overview.png){.manual-shot}

| No. | Control | Prerequisite and operation | Result, failure, permission, or risk |
|---|---|---|---|
| 1 | Save Changes | Update editable profile fields, then save. | A failed request preserves the confirmed profile. |
| 2 | Language | Select a supported display language. | The application updates the display language; a failed update keeps the prior setting. |
| 3 | Delete My Account | Open only after verifying the signed-in identity. | Opens a high-risk confirmation for the current account only. |

![Change Password: 1 current password, 2 new password, 3 confirmation, 4 hold to reveal, 5 update](/images/settings/settings-change-password.png){.manual-shot}

| No. | Control | Prerequisite and operation | Result, failure, permission, or risk |
|---|---|---|---|
| 1 | Current password | Enter the current password. | Required and checked before a request. |
| 2 | New password | Enter a different replacement password. | Required, must use allowed characters, and cannot equal the current password. |
| 3 | Confirm new password | Repeat the new password. | A mismatch blocks submission. |
| 4 | Hold to reveal | Hold the eye control while typing. | Reveals only while held and then hides again. |
| 5 | Update Password | Select after all validation passes. | Changes the current account password on success; failure leaves the prior password and current sign-in state in place. |

![Delete Account confirmation: 1 consequence, 2 cancel, 3 confirm](/images/settings/settings-delete-account-confirm.png){.manual-shot}

Key area enlarged:

![Delete Account confirmation controls](/images/zoom/settings-delete-account-confirm.png){.manual-shot}

| No. | Control | Prerequisite and operation | Result, failure, permission, or risk |
|---|---|---|---|
| 1 | Deletion consequence | Verify that the dialog names the current-account action. | Deleting here deletes only the current account. It does not delete Hubs, devices, or configuration. |
| 2 | Cancel | Close after deciding not to continue. | Sends no deletion request. |
| 3 | Confirm | Confirm only after verifying the signed-in identity. | This is a high-risk, irreversible account action. After confirming, treat deletion as complete only when RBLINK DESKTOP returns to Login. If an error appears, confirm that the account is still available before trying again. |

![Logout: 1 Logout](/images/settings/settings-logout.png){.manual-shot}

| No. | Control | Prerequisite and operation | Result, failure, permission, or risk |
|---|---|---|---|
| 1 | Logout | Select Logout to leave RBLINK DESKTOP in this browser. | Returns to Login. On a shared computer, close the browser and do not save sign-in information. |
