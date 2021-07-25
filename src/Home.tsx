import React from "react";
import {StaticQuery, graphql} from "gatsby";
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

interface HomePageProps {
    data: {allMembersJson: GatsbyTypes.MembersJsonConnection};
}

export default function HomePage({data}: HomePageProps): JSX.Element {
    const members = [...data.allMembersJson.nodes].map((node) => ({
        name: node.name!
    }));
    return (
        <Page>
            <div className="header">
                <h1>Aspida</h1>
                <p className="quote">
                    <i>"Kinda like MTF but more cool stuff" ~ Nico</i>
                </p>
            </div>
            <div className="content">
                <h2>Members</h2>
                <ul>
                    {members.map((member) => (
                        <li>{member.name}</li>
                    ))}
                </ul>
            </div>
        </Page>
    );
}
