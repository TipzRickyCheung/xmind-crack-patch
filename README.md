## 免责声明

⚠️ **该破解补丁仅限用于学习和研究目的，并且不会对新版本 Xmind 继续进行更新。**

- 您必须在下载后的 24 个小时之内，从您的电脑中彻底删除上述内容。如果您喜欢该程序，请支持正版软件，购买注册，得到更好的正版服务。

- 禁止用于商业或者非法用途，且不得将该软件对大众进行传播，否则，一切后果自负。

- 如果您使用本软件和技术用于商业化而产生任何损失、风险或法律纠纷，作者将不承担任何责任。

- 作者不保证本软件和技术的完整性、准确性、可靠性、适用性或及时性。使用本软件和技术产生的任何后果，作者将不承担任何责任。

- 本软件和技术中的任何意见、建议或信息，均不构成作者或作者所在组织的任何形式的保证或担保。

- 任何人不得对本软件和技术进行反向工程、破解或其他非法行为。

- 任何未经作者或作者所在组织授权的行为，均可能构成侵权或违法行为，一经发现作者将保留追究其法律责任的权利。

- 使用本软件和技术将被视为您已经完全接受本免责声明的所有条款和条件。如果您不同意本免责声明的任何部分，请勿使用本软件和技术。

## 描述

该补丁仅针对 Xmind 23.08.02122 版本，不保证其他版本的可用性，支持 Linux、MacOS 版本的“功能体验”。

**暂不支持 Windows 系统，Windows 系统请勿”体验“。**

再次重申如果您喜欢该程序，请支持正版软件，购买注册，得到更好的正版服务。

> Releases 中提供生成好的补丁文件，可前往直接下载替换。

## 环境搭建

- Node.js
- Xmind 23.08.02122

```bash
npm install -g asar
```

## 如何使用

1. 从官方下载 Xmind 23.08.02122 版本进行安装。

2. 克隆项目

   ```bash
   git clone https://github.com/henryau53/xmind-crack-patch.git
   cd xmind-crack-patch
   ```

3. 编译补丁包

   ```bash
   asar pack ./app.asar.non-windows app.asar
   ```

4. 使用上一步生成的 app.asar 文件替换 Xmind 安装路径中的 resources 文件夹中的 app.asar 文件即可。
