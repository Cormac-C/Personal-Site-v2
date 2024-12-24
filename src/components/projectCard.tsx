import React from "react";
import { Card, Row, Col, Badge } from "react-bootstrap";
import { Link } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { isProjectOutdated } from "../utils";

interface ProjectCardProps {
  project: {
    title: string;
    link: string;
    endDate: string;
    subtitle: string;
    description: string;
    image: any;
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const image = getImage(project.image.childrenImageSharp[0])!;
  const outdated = isProjectOutdated(project.endDate);
  return (
    <div>
      <Link to={project.link} className="!no-underline">
        <Card className="rounded-xl p-4 mb-12 md:min-h-56 md:pt-8 md:pb-4 hover:shadow-md">
          <Row xs={1} md={2}>
            <Col className="self-center" align="center">
              <div className="w-full h-full">
                <GatsbyImage image={image} alt={project.title} />
              </div>
            </Col>
            <Col className="self-center">
              <Card.Title className="!text-2xl !font-bold">
                {project.title}
              </Card.Title>
              <Card.Subtitle className="mb-2 !text-lg !text-gray-500">
                {outdated && (
                  <Badge pill bg="secondary" className="m-0.5">
                    🕒 Old
                  </Badge>
                )}{" "}
                {project.subtitle}
              </Card.Subtitle>
              <Card.Text className="!text-xl text-black">
                {project.description}
              </Card.Text>
            </Col>
          </Row>
        </Card>
      </Link>
    </div>
  );
};

export default ProjectCard;
