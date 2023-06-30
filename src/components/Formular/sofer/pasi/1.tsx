import FormWrapper from "../../FormWrapper";
import { useState } from "react";
import CardRemorca from "../CardRemorca";
import Cisterna from "../../../../public/imagini/formular/sofer/negru/cisterna.svg";
import CisternaAlb from "../../../../public/imagini/formular/sofer/alb/cisterna.svg";
import Frigorifica from "../../../../public/imagini/formular/sofer/negru/frigorifica.svg";
import FrigorificaAlb from "../../../../public/imagini/formular/sofer/alb/frigorifica.svg";
import Prelata from "../../../../public/imagini/formular/sofer/negru/prelata.svg";
import PrelataAlb from "../../../../public/imagini/formular/sofer/alb/prelata.svg";
import Basculanta from "../../../../public/imagini/formular/sofer/negru/basculanta.svg";
import BasculantaAlb from "../../../../public/imagini/formular/sofer/alb/basculanta.svg";
import Box from "../../../../public/imagini/formular/sofer/negru/box.svg";
import BoxAlb from "../../../../public/imagini/formular/sofer/alb/box.svg";
import Animale from "../../../../public/imagini/formular/sofer/negru/animale.svg";
import AnimaleAlb from "../../../../public/imagini/formular/sofer/alb/animale.svg";
import Siloz from "../../../../public/imagini/formular/sofer/negru/siloz.svg";
import SilozAlb from "../../../../public/imagini/formular/sofer/alb/siloz.svg";
import Container from "../../../../public/imagini/formular/sofer/negru/container.svg";
import ContainerAlb from "../../../../public/imagini/formular/sofer/alb/container.svg";
import Agabaritic from "../../../../public/imagini/formular/sofer/negru/agabaritic.svg";
import AgabariticAlb from "../../../../public/imagini/formular/sofer/alb/agabaritic.svg";

interface IClickProps {
	cardSelectat: number;
	valoareFormular: string;
}

const Pas1Trasport = ({ setValue, setDisabled }: any) => {
	const [selected, setSelected] = useState(0);
	const clasaIconite = "w-full";
	const handleClick = ({ cardSelectat, valoareFormular }: IClickProps) => {
		setValue("tipRemorca", valoareFormular);
		setSelected(cardSelectat);
		setDisabled(false);
	};
	return (
		<FormWrapper intrebare="Cu ce tip de remorca va doriti sa lucrati?">
			<div className=" grid w-fit grid-cols-3 place-items-center gap-[10px] md:gap-5 md:gap-x-5">
				<CardRemorca
					className={`${selected == 1 && "bg-gri-brand text-alb-site"}  `}
					onClick={() => handleClick({ cardSelectat: 1, valoareFormular: "cisterna" })}
					text="Cisterna"
					svg={selected == 1 ? <CisternaAlb className={clasaIconite} /> : <Cisterna className={clasaIconite} />}
				/>
				<CardRemorca
					className={`${selected == 2 && "bg-gri-brand text-alb-site"}`}
					onClick={() => handleClick({ cardSelectat: 2, valoareFormular: "frigorifica" })}
					text="Frigorifica"
					svg={selected == 2 ? <FrigorificaAlb className={clasaIconite} /> : <Frigorifica className={clasaIconite} />}
				/>
				<CardRemorca
					className={`${selected == 3 && "bg-gri-brand text-alb-site"}`}
					onClick={() => handleClick({ cardSelectat: 3, valoareFormular: "prelata" })}
					text="Prelata"
					svg={selected == 3 ? <PrelataAlb className={clasaIconite} /> : <Prelata className={clasaIconite} />}
				/>
				<CardRemorca
					className={`${selected == 4 && "bg-gri-brand text-alb-site"}`}
					onClick={() => handleClick({ cardSelectat: 4, valoareFormular: "basculanta" })}
					text="Basculanta"
					svg={selected == 4 ? <BasculantaAlb className={clasaIconite} /> : <Basculanta className={clasaIconite} />}
				/>
				<CardRemorca
					className={`${selected == 5 && "bg-gri-brand text-alb-site"}`}
					onClick={() => handleClick({ cardSelectat: 5, valoareFormular: "animale" })}
					text="Box"
					svg={selected == 5 ? <BoxAlb className={clasaIconite} /> : <Box className={clasaIconite} />}
				/>
				<CardRemorca
					className={`${selected == 6 && "bg-gri-brand text-alb-site"}`}
					onClick={() => handleClick({ cardSelectat: 6, valoareFormular: "cisterna" })}
					text="Animale"
					svg={selected == 6 ? <AnimaleAlb className={clasaIconite} /> : <Animale className={clasaIconite} />}
				/>
				<CardRemorca
					className={`${selected == 7 && "bg-gri-brand text-alb-site"}`}
					onClick={() => handleClick({ cardSelectat: 7, valoareFormular: "siloz" })}
					text="Siloz"
					svg={selected == 7 ? <SilozAlb className={clasaIconite} /> : <Siloz className={clasaIconite} />}
				/>
				<CardRemorca
					className={`${selected == 8 && "bg-gri-brand text-alb-site"}`}
					onClick={() => handleClick({ cardSelectat: 8, valoareFormular: "container" })}
					text="Container"
					svg={selected == 8 ? <ContainerAlb className={clasaIconite} /> : <Container className={clasaIconite} />}
				/>
				<CardRemorca
					className={`${selected == 9 && "bg-gri-brand text-alb-site"}`}
					onClick={() => handleClick({ cardSelectat: 9, valoareFormular: "agabaritic" })}
					text="Agabaritic"
					svg={selected == 9 ? <AgabariticAlb className={clasaIconite} /> : <Agabaritic className={clasaIconite} />}
				/>
			</div>
		</FormWrapper>
	);
};

export default Pas1Trasport;
