<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1" %>
    <%@ taglib uri="http://www.springframework.org/tags/form" prefix="form" %>
        <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
            <%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
                <!DOCTYPE html>
                <html>

                <head>
                    <meta charset="ISO-8859-1">
                    <title>Insert title here</title>
                    <style>
                        body {
                            background-color: #f0f0f0;
                            font-family: "tahoma";
                            color: #808080
                        }

                        ;

                        h2 {
                            color: green
                        }

                        ;
                    </style>
                </head>

                <body text=align="center">
                    <table border="1">
                        <h2>View Student Details</h2>
                        <tr>
                            <th>Student Id</th>
                            <th>Name</th>
                            <th>Date of
                                admission</th>
                            <th>Physics</th>
                            <th>Chemistry</th>
                            <th>Biology</th>
                            <th>Action</th>
                        </tr>
                        <c:forEach items="${list}" var="stu">
                            <tr>
                                <td>${stu.id}</td>
                                <td>${stu.name}</td>
                                <td>
                                    <fmt:formatDate pattern="dd-MM-yyyy" value="${stu.doa}" /></td>
                                <td>${stu.physics}</td>
                                <td>${stu.chemistry}</td>
                                <td>${stu.biology}</td>    
                                
                                <td><a href="deleteStu/${stu.id}">Delete</a></td>
                            </tr>
                        </c:forEach>
                    </table>
                    <a href="stuForm">Add a new Student</a>
                </body>

                </html>