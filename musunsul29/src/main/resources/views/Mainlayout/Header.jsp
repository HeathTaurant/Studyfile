<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>Page Title</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link rel='stylesheet' type='text/css' href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <link rel='stylesheet' type='text/css' media='screen' href='/musunsul29/src/main/resources/css/Mainlayout/Header.css'>
    <script src='/musunsul29/src/main/resources/js/jquery-3.6.0.min.js'></script>
    <link rel="stylesheet" href="/musunsul29/src/main/resources/css/bootstrap.css">
<script type="text/javascript" src="/musunsul29/src/main/resources/js/bootstrap.js"></script>
</head>
<body>
   <nav class="navbar  navbar-expand-sm  bg-dark  navbar-dark fixed-top">
      <div class="container-fluid">
      <form class="form-inline" action="/search.do" method="GET">  
         <div class="input-group">
         <input class="form-control" type="text" placeholder="Search Ethaol">
         <button class="btn btn-secondary"><i class="fas fa-search"></i></button>  
         </div>
         </form>
      </div>
      <form class="d-flex">
      <div class="dropdown">
         <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="far fa-user"></i>
         </a>
         </div>
      </form>
       
         <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuLink">
            <li><a href="#" class="dropdown-item">sign up</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a href="#" class="dropdown-item">login</a></li>
            <li><a href="#" class="dropdown-item">mypage</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a href="#" class="dropdown-item">logout</a></li>
         </ul>
      
       


<!--bg-dark bg-light bg-primary bg-success bg-info bg-warning bg-danger bg-secondary   -->
<!-- <i class="far fa-user"></i> -->
<!-- 
<li><a href="#" class="dropdown-item">login</a></li>
<li><a href="#" class="dropdown-item">mypage</a></li>
<li><a href="#" class="dropdown-item">sign in</a></li>
<li><hr class="dropdown-divider"></li>
<li><a href="#" class="dropdown-item">logout</a></li>
-->
         </nav>
</body>
</html>