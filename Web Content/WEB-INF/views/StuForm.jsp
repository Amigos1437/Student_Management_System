<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1" %>
    <%@ taglib uri="http://www.springframework.org/tags/form" prefix="form" %>
        <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
            <!DOCTYPE html>
            <html>

            <head>
                <meta charset="ISO-8859-1">
                <title>Abc &amp; Co - Student addition module</title>
                <style>
                    .myErr {
                        color: red;
                    }
                </style>
            </head>

            <body align="center">
                <h1>Add an Student</h1>
                <form:form method="post" action="save" modelAttribute="stu">
                    <table>
                    
                        <tr>
                            <td align="right">
                                Student no:
                            </td>
                            <td>
                                <form:input path="id" required="required" placeholder="Between 1 and 20" />
                            </td>
                            <td>
                                <form:errors cssClass="myErr" path="id" />
                            </td>
                        </tr>
                        
                        <tr>
                            <td align="right">
                                Student name:
                            </td>
                            <td>
                                <form:input path="name" required="required" placeholder="At least 4 characters" />
                            </td>
                            <td>
                                <form:errors cssClass="myErr" path="name" />
                            </td>
                        </tr>
                       
                        <tr>
                            <td align="right">
                                Date of admission:
                            </td>
                            <td>
                                <form:input type="date" placeholder="dd/MM/yyyy" path="doa" required="required" />
                            </td>
                            <td>
                                <form:errors cssClass="myErr" path="doa" />
                            </td>
                        </tr>
                        
                        <tr>
                            <td align="right">
                                Physics:
                            </td>
                            <td>
                                <form:input path="physics" required="required" placeholder="Between 1 and 100" />
                            </td>
                            <td>
                                <form:errors cssClass="myErr" path="physics" />
                            </td>
                        </tr> 
                        
                        <tr>
                            <td align="right">
                                Chemistry:
                            </td>
                            <td>
                                <form:input path="chemistry" required="required" placeholder="Between 1 and 100" />
                            </td>
                            <td>
                                <form:errors cssClass="myErr" path="chemistry" />
                            </td>
                        </tr> 
                        
                        <tr>
                            <td align="right">
                                Biology:
                            </td>
                            <td>
                                <form:input path="biology" required="required" placeholder="Between 1 and 100" />
                            </td>
                            <td>
                                <form:errors cssClass="myErr" path="biology" />
                            </td>
                        </tr> 
                        
                        <tr>
                            <td colspan="3">&nbsp;
                            </td>
                        </tr>
                        <tr>
                            <td colspan="3" align="center">
                                <input type="submit" value="Save">
                            </td>
                        </tr>
                    </table>
                </form:form>
                <a href="viewForm">List student</a>
            </body>

            </html>