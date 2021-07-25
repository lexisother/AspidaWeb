import React from "react";
import {graphql} from "gatsby";
import Page from "./shared/Page";

export const query = graphql`
    query {
        allMembersJson {
            nodes {
                name
            }
        }
    }
`;

interface MembersPageProps {
    data: {allMembersJson: GatsbyTypes.MembersJsonConnection};
}

export default function MembersPage({data}: MembersPageProps): JSX.Element {
    const members = [...data.allMembersJson.nodes].map((node) => ({
        name: node.name!
    }));

    return (
        <Page>
            <div className="header">
                <h1>Members</h1>
                <p>Below is a list of all the Aspida members.</p>
            </div>
            <ul>
                {members.map((member) => (
                    <li>{member.name}</li>
                ))}
            </ul>
        </Page>
    );
}
