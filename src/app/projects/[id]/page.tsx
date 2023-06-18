import { Project } from "@modules/projects/api/project.type";
import { dayjs } from "@services/dates";
import { Box, Button, Divider, Skeleton, Stack, Typography } from "@ui/atoms";
import { FC } from "react";

const getData = async (id: string): Promise<Project> => {
  const res = await fetch(`http://localhost:8080/project/${id}`);

  return res.json() as Promise<Project>;
};

interface Props {
  params: {
    id: string;
  };
}

const SingleProjectPage: FC<Props> = async (props) => {
  const { params } = props;
  const project = await getData(params.id);
  console.log(project);

  return (
    <Stack>
      <Box pb="32px">
        <Skeleton animation="wave" height={240} width={1456} variant="rectangular" />
      </Box>
      <Stack direction="row" alignItems="flex-start" gap="32px">
        <Box>
          <Stack direction="row" gap="1px">
            <Typography>#lokalne</Typography>
            <Typography>#ngo</Typography>
            <Typography>#festyn</Typography>
          </Stack>
          <Stack
            pb="16px"
            pt="16px"
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography>{project.title}</Typography>
            <Button>Dodaj współorganizatora</Button>
          </Stack>
          <Typography>{project.description}</Typography>
          <Box pb="24px" pt="24px">
            <Stack direction="row" gap="32px" pb="16px">
              <Box width="180px">
                <Typography>Status</Typography>
              </Box>
              <Typography>{project.status}</Typography>
            </Stack>
            <Stack direction="row" gap="32px" pb="16px">
              <Box width="180px">
                <Typography>Organizator</Typography>
              </Box>
              <Typography>
                {project.organizationList.find((o) => o.id === project.mainOrganizationId)?.name ||
                  ""}
              </Typography>
            </Stack>
            <Stack direction="row" gap="32px" pb="16px">
              <Box width="180px">
                <Typography>Czas trwania</Typography>
              </Box>
              <Typography>
                {dayjs(project.startDateTime).format("DD.MM")} -{" "}
                {dayjs(project.endDateTime).format("DD.MM.YYYY")}
              </Typography>
            </Stack>
            <Stack direction="row" gap="32px">
              <Box width="180px">
                <Typography>Współorganizatorzy</Typography>
              </Box>
              <Typography>
                {project.organizationList
                  .filter((o) => o.id !== project.mainOrganizationId)
                  .map((o) => o.name)
                  .reduce((prev, next) => prev + ", " + next)}
              </Typography>
            </Stack>
          </Box>
          <Divider />
          <Box pb="24px" pt="24px">
            <Typography pb="16px">Szczegółowy opis projektu:</Typography>
            <Typography pb="16px">{project.content}</Typography>
            <Stack justifyContent="center">
              <Button>Przestrzeń projektowa</Button>
            </Stack>
          </Box>
          <Divider />
          <Box>
            <Typography p="24px 0 16px 0">Powiązane wydarzenia</Typography>
            <Stack direction="row" gap="12px">
              <Skeleton animation="wave" height={164} width={474} variant="rectangular" />
              <Skeleton animation="wave" height={164} width={474} variant="rectangular" />
            </Stack>
          </Box>
        </Box>
        <Box>
          <Typography pb="16px">#stowarzyszenie_rejestrowe #design</Typography>
          <Typography pb="12px">
            {project.organizationList.find((o) => o.id === project.mainOrganizationId)?.name || ""}
          </Typography>
          <Typography pb="16px">
            Propagowanie wśród dieci i młodzieży sztuk walki. Samoobrona jest często pierwszym
            powodem, dla którego rodzice zapisują dzieci na karate. Powinien być ostatnim. Ta sztuka
            walki przede wszystkim jest katalizatorem dla ukształtowania u nastolatka pewności
            siebie, stanowczości, umiejętności dążenia do celu, spokoju i koncentracji.
          </Typography>
          <Stack direction="row" gap="48px" pb="16px">
            <Box>
              <Typography>Adres</Typography>
              <Typography>ul. Świerkowa 1 36-342 Kołobrzeg</Typography>
            </Box>
            <Box>
              <Typography>Adres e-mail</Typography>
              <Typography>nazwa@domena.pl</Typography>
            </Box>
          </Stack>
          <Box pb="32px">
            <Typography>Telefon</Typography>
            <Typography>(+48) 123-456-789</Typography>
          </Box>
          <Button fullWidth>Skontaktuj się</Button>
        </Box>
      </Stack>
    </Stack>
  );
};

export default SingleProjectPage;
