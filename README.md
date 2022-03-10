<h1 align="center">NFT Bot</h1>

<p align="center">
<img src="https://img.shields.io/tokei/lines/github/JonZavialov/nft-bot?color=9cf" alt="Total Lines" />
<img src="https://img.shields.io/github/repo-size/JonZavialov/nft-bot?color=9cf&logo=GitHub" alt="GitHub Repo Size" />
<img src="https://img.shields.io/github/commit-activity/m/JonZavialov/nft-bot?color=9cf&logo=GitHub" alt="Commit Activity" />
</p>

<p align="center">A general bot created for NFT discord servers</p>
<p align="center">NOTE: this bot is only meant to be used in a single server</p>

## ⚙️ Configuration

1. Create a discord bot
2. Add a file to the root folder named `config.json`
3. In the file, add the following. Your bot's token goes in the `token` field, your bot's prefix goes in the `prefix` field, your bot's guild ID goes in the `guildID` field, and your ID goes in the `ownerID` field.
```json
{
    "token": "your_token_here",
    "prefix": "your_prefix_here",
    "guildID": "your_guild_id_here",
    "ownerID": "your_owner_id_here"
}
```
4. The bot has a secret save records command. By dming the bot `save records`, the record of invites from your server will be saved to a file. This will save the records in case the bot crashes and will be loaded on the next startup.

## 🧠 Framework

This bot utilizes a framework which I coded. It is adaptable and can be used to easily make custom discord bots. The repository can be seen [here](https://github.com/JonZavialov/bot-framework).

## 👨‍💻 Developlment

This project has been completed.
