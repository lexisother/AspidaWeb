#!/usr/bin/env bash

API_BASE="https://discord.com/api/v9"
GUILD_ID="867710362341081118"

data=$(curl -H "Authorization: Bot $BOT_TOKEN" "$API_BASE/guilds/$GUILD_ID/members?limit=50")
jq 'map(select(.user.bot != true)) | [.[] | {id: .user.id, name: .user.username, nick: .nick, avatar: .user.avatar}]' <<< "$data" > data.json
