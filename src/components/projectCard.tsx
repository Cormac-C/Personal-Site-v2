import React from "react";
import { Card, Row, Col, Badge } from "react-bootstrap";
import { isProjectOutdated } from "../lib/utils";

interface ProjectCardProps {
  project: {
    title: string;
    link: string;
    endDate: string;
    subtitle: string;
    description: string;
    image?: string; // path relative to content file
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const outdated = isProjectOutdated(project.endDate);
  return (
    <div className="md:h-full">
      <a
        href={`/projects/${project.link}/`}
        className="!no-underline md:h-full md:block"
      >
        <Card className="rounded-xl px-4 py-auto mb-12 md:min-h-56 md:pt-8 md:pb-4 hover:shadow-md  md:!h-[calc(100%-32px)]">
          <Row xs={1} md={2}>
            <Col className="self-center" align="center">
              {project.image && (
                <div className="w-full h-full">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="max-h-48 mx-auto"
                  />
                </div>
              )}
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
      </a>
    </div>
  );
};

export default ProjectCard;
