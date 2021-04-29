import { FC } from "react";
import { SvgProps } from "../../components/Svg/types";
export declare type ConnectorNames = "authereum" | "fortmatic" | "frame" | "injected" | "portis" | "squarelink" | "torus" | "walletconnect" | "walletlink" | "bsc";
export declare type Login = (connectorId: ConnectorNames) => void;
export interface Config {
    title: string;
    icon: FC<SvgProps>;
    connectorId: ConnectorNames;
}
