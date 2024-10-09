import { Cell } from "react-vant";
import { useSnapshot } from "valtio";
import { useTonAddress } from "@tonconnect/ui-react";
import { TabBar } from "@/components";
import { appStore } from "@/stores/app";
import styles from "./index.module.less";

export default () => {
	const appStates = useSnapshot(appStore.states);
	const address = useTonAddress();

	return (
		<div className={styles.queryBalance}>
			<Cell.Group>
				<Cell title="Ton Address" label={address} />
				<Cell title="Aptos Vault Address" label="0x87fb324d6c6c8f8e3173a9ec37ac6fb67fea9e29da897d92290adb88453ec271" />
				<Cell title="APT Balance" label={appStates.balance} />
			</Cell.Group>
			<TabBar />
		</div>
	);
};
