import CommonFooter from "@/ui_components/common/fotter";
import CommonNavBar from "@/ui_components/common/navbar";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useRouter } from "next/router";
import axios from "axios";
import { useEffect, useState } from "react";
import { firebaseApp } from "@/firebase/firebase";
import { getDownloadURL, ref } from "firebase/storage";
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
    router.push(`/construction/detail?id=${id}&name=${name}`);
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
      <CommonNavBar />
      <Container className="mt-3 mb-20">
        <h2 className="text-center mt-10 mb-5">施工事例</h2>
        <Row xs={1} md={3} className="g-4 mx-2 my-2">
          {constructions?.map((val, idx) => (
            <Col key={idx}>
              <Card onClick={() => handleCardClick(val.construction.id, val.construction.display_name)}>
                <Card.Img style={{height: 300, width: "100%" }} variant="top" src={val.imagePath as string} />
                <Card.Body>
                  <Card.Title>{val.construction.display_name}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <CommonFooter />
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const { req, res } = context;
  const userAgent = req.headers["user-agent"];
  const isMobile = /iPhone|iPad|iPod|Android/i.test(userAgent);

  if (isMobile) {
    res.writeHead(302, { Location: "/mobile/construction_example" });
    res.end();
  }

  return {
    props: {}, // 必要な場合はpropsを設定
  };
}
