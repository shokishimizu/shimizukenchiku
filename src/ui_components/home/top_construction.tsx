import { firebaseApp } from "@/firebase/firebase";
import axios from "axios";
import { getDownloadURL, ref } from "firebase/storage";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  Card,
  CardGroup,
  Col,
  Container,
  ListGroup,
  Row,
} from "react-bootstrap";

interface ConstructionAndImagePath {
  construction: Construction;
  imagePath: String;
}

function TopConstruction({ isMobile }: { isMobile: boolean }) {
  const router = useRouter();
  const [constructions, setConstructions] =
    useState<ConstructionAndImagePath[]>();
  const detailButtonUrl = isMobile ? "/mobile/construction/detail" : "/construction/detail";
  const moreButtonUrl = isMobile ? "/mobile/construction_example" : "/construction_example";

  const getConstructions = async () => {
    const response = await axios.get("/api/construction");
    return response.data;
  };

  const getConstructionImagePath = async (path: String): Promise<String> => {
    const gsReference = ref(
      firebaseApp.firestorage,
      `gs://shimizukenchiku-hp.appspot.com/${path}`
    );
    return getDownloadURL(gsReference)
      .then((url) => {
        return url;
      })
      .catch((err) => {
        return "";
      });
  };

  useEffect(() => {
    const fetchData = async () => {
      const data: [Construction] = await getConstructions();

      const constructionList: ConstructionAndImagePath[] = [];
      for (const val of data) {
        const imagePath = await getConstructionImagePath(
          `${val.id}/${val.main_image_path}`
        );
        const construction: ConstructionAndImagePath = {
          construction: val,
          imagePath: imagePath,
        };
        constructionList.push(construction);
      }
      setConstructions(constructionList);
    };

    fetchData();
  }, []);

  return (
    <Container className="mt-4 mb-5">
      <h3 className="mb-4 text-center">施工事例</h3>
      <CardGroup className="mb-4">
        {constructions?.slice(0, 3).map((val, idx) => (
          <Card key={idx}>
            <Card.Img variant="top" src={val.imagePath as string} />
            <Card.Body>
              <Card.Title>{val.construction.display_name}</Card.Title>
              <Card.Text>
              </Card.Text>
              <div className="d-flex justify-content-end">
                <Card.Link className="text-secondary-300" href={`${detailButtonUrl}?id=${val.construction.id}&name=${val.construction.display_name}`}>見に行く</Card.Link>
              </div>
            </Card.Body>
          </Card>
        ))}
      </CardGroup>
      <Link href={moreButtonUrl} className="text-right text-secondary-300">
        <p>もっと見る</p>
      </Link>
    </Container>
  );
}

export default TopConstruction;
