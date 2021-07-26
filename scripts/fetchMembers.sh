#!/usr/bin/env bash

API_BASE="https://discord.com/api/v9"
GUILD_ID="867710362341081118"

if [ ! -d 'data' ]; then
  mkdir data
fi

memberdata=$(curl -H "Authorization: Bot $BOT_TOKEN" "$API_BASE/guilds/$GUILD_ID/members?limit=50")
jq 'map(select(.user.bot != true)) | [.[] | {id: .user.id, name: .user.username, nick: .nick, avatar: .user.avatar, roles: .roles}]' <<< "$memberdata" > data/members.json

roledata=$(curl -H "Authorization: Bot $BOT_TOKEN" "$API_BASE/guilds/$GUILD_ID/roles")
jq 'map(select(.managed != true)) | [.[] | {name: .name, id: .id, color: .color}]' <<< $roledata > data/roles.json
