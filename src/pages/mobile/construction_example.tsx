import { Card, Col, Container, Row } from "react-bootstrap";
import { useRouter } from "next/router";
import axios from "axios";
import { useEffect, useState } from "react";
import { firebaseApp } from "@/firebase/firebase";
import { getDownloadURL, ref } from "firebase/storage";
import CommonMobileNavBar from "@/ui_components/common/mobile_navbar";
import CommonMobileFooter from "@/ui_components/common/mobile_fotter";
import CommonHead from "@/ui_components/common/head";

interface ConstructionAndImagePath {
  construction: Construction;
  imagePath: String;
}

export default function ConstructionExample() {
  const router = useRouter();
  const [constructions, setConstructions] =
    useState<ConstructionAndImagePath[]>();

  const handleCardClick = (id: String, name: String) => {
    router.push(`/mobile/construction/detail?id=${id}&name=${name}`);
  };

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
    <div>
      <CommonHead title="施工事例" />
      <CommonMobileNavBar />
      <Container className="mb-20">
        <h2 className="text-center mt-3 mb-1">施工事例</h2>
        <Row xs={1} md={3} className="g-4 mx-2 my-2">
          {constructions?.map((val, idx) => (
            <Col key={idx}>
              <Card onClick={() => handleCardClick(val.construction.id, val.construction.display_name)}>
                <Card.Img variant="top" src={val.imagePath as string} />
                <Card.Body>
                  <Card.Title>{val.construction.display_name}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <CommonMobileFooter />
    </div>
  );
}