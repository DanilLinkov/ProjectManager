package com.projectman.frello.domain;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.Date;

@Entity
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @NotBlank(message= "Project name is required")
    private String projectName;

    @NotBlank(message ="Project Identifier is required")
    @Size(min=4, max=5, message = "Please use 4 to 5 characters")
    @Column(updatable = false, unique = true)
    private String projectIdentifier;

    @NotBlank(message = "Project description is required")
    private String description;

//    @JsonFormat(pattern = "yyyy-mm-dd")
//    private Date dateCreated;
//    @JsonFormat(pattern = "yyyy-mm-dd")
//    private Date dateUpdated;

    public Project() {

    }

    public long getId() {
        return id;
    }

    public String getProjectName() {
        return projectName;
    }

    public String getProjectIdentifier() {
        return projectIdentifier;
    }

    public String getDescription() {
        return description;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setProjectName(String projectName) {
        this.projectName = projectName;
    }

    public void setProjectIdentifier(String projectIdentifier) {
        this.projectIdentifier = projectIdentifier;
    }

    public void setDescription(String description) {
        this.description = description;
    }

//    public Date getDateUpdated() {
//        return dateUpdated;
//    }
//
//    public void setDateUpdated(Date dateUpdated) {
//        this.dateUpdated = dateUpdated;
//    }
//
//    public Date getDateCreated() {
//        return dateCreated;
//    }
//
//    public void setDateCreated(Date dateCreated) {
//        this.dateCreated = dateCreated;
//    }
//
//    @PrePersist
//    protected void onCreate(){
//        this.dateCreated = new Date();
//    }
//
//    @PreUpdate
//    protected void onUpdate(){
//        this.dateUpdated = new Date();
//    }

}
