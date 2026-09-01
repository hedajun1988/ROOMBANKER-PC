# Operation safety

Confirm the target, current role, business impact, and recovery path before every privileged action.

| Action | Preconditions and consequence | Failure and recovery |
|---|---|---|
| Delete Hub | Authorized user confirms the target. It removes personal and company bindings; the PC cannot see it until it is rebound. The physical SN record remains. | A failed request must not be treated as unbinding; rebind the intended Hub when access must be restored. |
| SSH | Authorized user confirms the Hub. SSH is a secure remote maintenance channel. | If the switch returns to its previous state or no success message appears, do not assume the setting changed and do not retry repeatedly. Follow the operational rollback procedure. |
| Restart | Authorized user confirms the Hub and an appropriate maintenance window. | A missing success indication is not a confirmed restart. Wait for Hub status and monitoring results before considering another attempt. |
| Super Admin transfer | Confirm both users and the room scope. Transfer exchanges role, identifier, and room scope; clears PIN; moves notification selection; clears second and third PC phone numbers. | Review the resulting accounts and correct scope through authorized administration if the transfer was wrong. |
| Delete my account | Confirm the signed-in identity. It deletes only the current account. | Failure leaves the account unchanged; it does not delete devices or configuration. |
| Delete company | Authorized user confirms the company. After deletion it no longer appears in the available company list and related management cannot continue. | Failure preserves the company; use authorized administration to correct an unintended state. |
