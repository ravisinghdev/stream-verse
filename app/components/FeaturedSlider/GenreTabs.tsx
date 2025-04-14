import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Props {
	activeTab: string;
	onChangeTab: (value: string) => void;
}

const GenreTabs = ({ activeTab, onChangeTab }: Props) => {
	return (
		<Tabs value={activeTab} onValueChange={onChangeTab} className="px-4">
			<TabsList>
				<TabsTrigger value="Anime">Anime</TabsTrigger>
				<TabsTrigger value="Movies">Movies</TabsTrigger>
				<TabsTrigger value="Web Series">Web Series</TabsTrigger>
			</TabsList>
		</Tabs>
	);
};

export default GenreTabs;
