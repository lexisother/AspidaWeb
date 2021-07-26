import React from "react";
import {graphql} from "gatsby";
import Page from "./shared/Page";

export const query = graphql`
    query {
        allMembersJson {
            nodes {
                id
                avatar
                name
                nick
                roles
            }
        }
        allRolesJson {
            nodes {
                id
                name
                color
            }
        }
    }
`;

interface MembersPageProps {
    data: {allMembersJson: GatsbyTypes.MembersJsonConnection; allRolesJson: GatsbyTypes.RolesJsonConnection};
}

export default function MembersPage({data}: MembersPageProps): JSX.Element {
    const members = [...data.allMembersJson.nodes].map((node) => ({
        id: node.id!,
        avatar: node.avatar!,
        name: node.name!,
        nick: node.nick!,
        roles: node.roles!
    }));

    const roles = [...data.allRolesJson.nodes].map((node) => ({
        id: node.id!,
        name: node.name!,
        color: node.color!
    }));

    return (
        <Page>
            <div className="header">
                <h1>Members</h1>
                <p>Below is a list of all the Aspida members.</p>
            </div>
            <div className="cards">
                {members.map((member) => (
                    <div className="card">
                        <div className="cardHeader">
                            <img
                                src={`https://cdn.discordapp.com/avatars/${member.id}/${member.avatar}.png`}
                                height="100px"
                            />
                            {member.nick ? (
                                <>
                                    <p className="nick">
                                        <i>{member.nick}</i>
                                    </p>
                                    <p className="name">{member.name}</p>
                                </>
                            ) : (
                                <>
                                    <p className="nick">
                                        <i>{member.name}</i>
                                    </p>
                                </>
                            )}
                        </div>
                        <div className="cardContent">
                            {member.roles.map((role) => (
                                <p style={{color: `#${roles.find((r) => r.id === role)?.color.toString(16)}`}}>
                                    {roles.find((r) => r.id === role)?.name}
                                </p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div>
                {members.map((member) => (
                    <div>
                        {member.name} roles:
                        <br />
                        {member.roles.map((role) => (
                            <>
                                <p style={{color: `#${roles.find((r) => r.id === role)?.color.toString(16)}`}}>
                                    {roles.find((r) => r.id === role)?.name}
                                </p>
                            </>
                        ))}
                        <br />
                    </div>
                ))}
            </div>
        </Page>
    );
}
