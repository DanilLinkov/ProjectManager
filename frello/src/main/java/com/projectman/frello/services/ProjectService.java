package com.projectman.frello.services;

import com.projectman.frello.domain.Project;
import com.projectman.frello.repositories.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProjectService {

    @Autowired
    private ProjectRepository projectRepository;

    public Project addorUpdateProject(Project project){
        project.setProjectIdentifier(project.getProjectIdentifier().toUpperCase());
        return projectRepository.save(project);
    }

    public Project findProjectByIdentifier(String projectId){
        Project project = projectRepository.findByProjectIdentifier(projectId.toUpperCase());

        return project;
    }

    public Iterable<Project> getAllProjects() {
        return projectRepository.findAll();
    }

    public void deleteProjectByIdentifier(String projectId){
        Project project = projectRepository.findByProjectIdentifier(projectId.toUpperCase());

        projectRepository.delete(project);
    }

}
