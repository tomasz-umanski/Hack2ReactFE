import { IEvent } from "@modules/events/api/event.type";
import { dayjs } from "@services/dates";
import { Box, Button, Divider, Skeleton, Stack, Typography } from "@ui/atoms";
import { FC } from "react";

const getData = async (id: string): Promise<IEvent> => {
  const res = await fetch(`http://localhost:8080/event/${id}`);

  return res.json() as Promise<IEvent>;
};

interface Props {
  params: {
    id: string;
  };
}

const SingleEventPage: FC<Props> = async (props) => {
  const { params } = props;
  const event = await getData(params.id);
  console.log(event);

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
            <Typography>{event.title}</Typography>
          </Stack>
          <Typography>{event.content}</Typography>
          <Box pb="24px" pt="24px">
            <Stack direction="row" gap="32px" pb="16px">
              <Box width="180px">
                <Typography>Czas trwania</Typography>
              </Box>
              <Typography>
                {event.localization} {dayjs(event.startDate).format("DD.MM.YYYY")}
              </Typography>
            </Stack>
            <Stack direction="row" gap="32px" pb="16px">
              <Box width="180px">
                <Typography>Organizator</Typography>
              </Box>
              <Typography>
                {event.organizationList?.find((o) => o.id === event.mainOrganizationId)?.name || ""}
              </Typography>
            </Stack>
            <Stack direction="row" gap="32px">
              <Box width="180px">
                <Typography>Współorganizatorzy</Typography>
              </Box>
              <Typography>
                {event.organizationList
                  ?.filter((o) => o.id !== event.mainOrganizationId)
                  .map((o) => o.name)
                  .reduce((prev, next) => prev + ", " + next)}
              </Typography>
            </Stack>
          </Box>
          <Divider />
          <Box pb="24px" pt="24px">
            <Typography pb="16px">Szczegółowy opis wydarzenia:</Typography>
            <Typography pb="16px">
              Zapraszamy na konferencję o zrównoważonym rozwoju, która odbędzie się w dniach 5-7
              grudnia 2023 roku. Wydarzenie to skupiać się będzie na globalnych wyzwaniach
              związanych z ochroną środowiska, społeczną równością i gospodarczą zrównoważonością.
              Podczas konferencji eksperci z różnych dziedzin, przedstawiciele rządu, organizacji
              pozarządowych, biznesu oraz społeczności akademickiej będą dyskutować nad
              innowacyjnymi rozwiązaniami, które mogą przyczynić się do budowy lepszego, bardziej
              zrównoważonego świata. Program konferencji obejmuje prezentacje, panele dyskusyjne,
              warsztaty i sesje networkingowe, które pozwolą uczestnikom wymieniać się wiedzą,
              doświadczeniem i inspiracjami. Będziemy omawiać zagadnienia takie jak efektywność
              energetyczna, odnawialne źródła energii, recykling, zrównoważony transport,
              sprawiedliwość społeczna, równość płci, edukacja zrównoważona i wiele innych. Naszym
              celem jest stworzenie platformy, na której wszyscy uczestnicy będą mogli wspólnie
              działać na rzecz zrównoważonego rozwoju, dzielić się najlepszymi praktykami i budować
              partnerstwa. Konferencja ma również na celu zainspirowanie liderów, decydentów i
              społeczności do podejmowania konkretnych działań, które wpłyną na poprawę jakości
              życia i ochronę naszej planety. Dołącz do nas na tej ważnej konferencji i bądź częścią
              ruchu na rzecz zrównoważonej przyszłości!
            </Typography>
            <Stack justifyContent="center">
              <Button>Aplikuj na wolontariat</Button>
            </Stack>
          </Box>
          <Divider />
          <Box>
            <Typography p="24px 0 16px 0">Powiązane projekty</Typography>
            <Stack direction="row" gap="12px">
              <Skeleton animation="wave" height={52} width={1024} variant="rectangular" />
            </Stack>
          </Box>
        </Box>
        <Box>
          <Typography pb="16px">#stowarzyszenie_rejestrowe #design</Typography>
          <Typography pb="12px">
            {event.organizationList?.find((o) => o.id === event.mainOrganizationId)?.name || ""}
          </Typography>
          <Typography pb="16px">
            Celem stowarzyszenia jest propagowanie kultury fizycznej na rzecz dzieci i młodzieży
            samorządu lokalnego oraz na podstawie zlecenia realizacji zadań publicznych, 2)
            wskazywanie pozytywnych kierunków i wzorców rozwoju osobowości dzieci i młodzieży,
            pogłębianie ich wiedzy i umiejętności, 3) rozwijanie uzdolnień i zainteresowań w
            zakresie kultury, kultury fizycznej, sportu, rekreacji, sztuki, krajoznawstwa i
            turystyki.
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
          <Box pb="16">
            <Typography>Telefon</Typography>
            <Typography>(+48) 123-456-789</Typography>
          </Box>
          <Box pb="32px">
            <Typography>Zasoby</Typography>
            <Typography>Zasób 1</Typography>
          </Box>
          <Button fullWidth>Skontaktuj się</Button>
        </Box>
      </Stack>
    </Stack>
  );
};

export default SingleEventPage;
