import Heading from "./ui-reusables/Heading";
import Card from "./ui-reusables/Card";
import { portfolios, projects } from "../commons/constants";

export default function Portfolio() {
    return (
        <div className="py-6 pb-28">
            <Heading icon="/" text="Portfolio" line={true} />
            <div className="grid grid-cols-3  mob:grid-cols-1 gap-6 py-2r">
                {portfolios.map((item, index) => (
                    <Card key={index} props={item} />
                ))}
            </div>
            <div className="pt-2r">
                <Heading icon="#" text="Small Projects" line={true}/>
                <div className="grid grid-cols-3  mob:grid-cols-1 gap-6 py-2r">
                    {projects.map((item, index) => (
                        <Card key={index} props={item} />
                    ))}
                </div>
            </div>
            
        </div>
    );
}
