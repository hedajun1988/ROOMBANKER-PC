# 角色与权限

访问基于角色。六类角色族为：平台超级管理员、平台管理员、平台操作员、公司 Owner、公司管理员、员工/普通用户。

当前模块为：Dashboard、Companies、Hubs、Alarm Messages、Device Messages、PC Operation Log、Accounts、Permissions、Deactivated Accounts、Notifications、Announcements。

| 角色族 | 菜单和操作可见性 |
|---|---|
| 平台超级管理员 | 全部模块；唯一可保存权限树变更的角色。 |
| 平台管理员 | 获授的运维和管理模块；权限树保持只读。 |
| 平台操作员 | 仅已分配的运维模块和操作。 |
| 公司 Owner | 公司范围内的公司及已分配 Hub 工作流。 |
| 公司管理员 | 公司范围内的员工及已分配 Hub 工作流。 |
| 员工/普通用户 | 仅明确获授的个人或已分配工作流。 |

账号缺少相应权限时，侧边栏和按钮会隐藏。直接输入页面地址不能绕过权限；无权限时会返回可访问页面。
