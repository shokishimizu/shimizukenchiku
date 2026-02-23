import CommonFooter from "@/ui_components/common/fotter";
import CommonNavBar from "@/ui_components/common/navbar";
import { firebaseApp } from "@/firebase/firebase";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import CommonHead from "@/ui_components/common/head";

export default function ConstructionDetail() {
  const router = useRouter();
  const { id, name } = router.query;
  const [urls, seturls] = useState<String[]>();
  
  const getConstructionImageFolderUrls = async (path: String): Promise<String[]> => {
    const gsReference = ref(firebaseApp.firestorage, `gs://shimizukenchiku-hp.appspot.com/${path}`);
  
    try {
      const imagesRef = await listAll(gsReference);
      const urls = await Promise.all(imagesRef.items.map(async (itemRef) => {
        const url = await getDownloadURL(itemRef);
        return url;
      }));
      return urls;
    } catch (err) {
      console.error('Error getting images:', err);
      return [];
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const data: String[] = await getConstructionImageFolderUrls(id as string);
      seturls(data);
    };

    console.log(id);
    fetchData();
  }, [id]);

  return (
    <div>
      <CommonHead title="施工事例" />
      <CommonNavBar />
      <Container className="mt-3 mb-20">
        <h2 className="text-center mt-10 mb-5">{name}</h2>
        <Row xs={1} md={3} className="g-4 mx-2 my-2">
          {urls?.map((val, idx) => (
            <Col key={idx}>
              <Card>
                <Card.Img variant="top" src={val as string} />
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
    res.writeHead(302, { Location: "/mobile/construction/detail" });
    res.end();
  }

  return {
    props: {}, // 必要な場合はpropsを設定
  };
}
