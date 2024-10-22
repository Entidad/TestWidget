import { Component, ReactNode, createElement } from "react";
import { HelloWorldSample } from "./components/HelloWorldSample";

import { TestWidgetContainerProps } from "../typings/TestWidgetProps";

import "./ui/TestWidget.css";

import { FaceTecSDK } from "./FaceTecSDK-browser/core-sdk/FaceTecSDK.js/FaceTecSDK";

export class TestWidget extends Component<TestWidgetContainerProps> {
    render(): ReactNode {
	console.info(typeof(FaceTecSDK));
        return <HelloWorldSample sampleText={this.props.sampleText ? this.props.sampleText : "World"} />;
    }
}
