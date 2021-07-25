import React from "react";
import Page from "./shared/Page";

export default function HomePage(): JSX.Element {
    return (
        <Page>
            <div className="header">
                <h1>Aspida</h1>
                <p className="quote">
                    <i>"Kinda like MTF but more cool stuff" ~ Nico</i>
                </p>
            </div>
            <div className="content">
                <p>[wip]</p>
            </div>
        </Page>
    );
}
