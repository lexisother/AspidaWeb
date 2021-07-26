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
            }
        }
    }
`;

interface MembersPageProps {
    data: {allMembersJson: GatsbyTypes.MembersJsonConnection};
}

export default function MembersPage({data}: MembersPageProps): JSX.Element {
    const members = [...data.allMembersJson.nodes].map((node) => ({
        id: node.id!,
        avatar: node.avatar!,
        name: node.name!,
        nick: node.nick!
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
                    </div>
                ))}
            </div>
        </Page>
    );
}
