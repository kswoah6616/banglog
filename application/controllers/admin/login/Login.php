<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Login extends CI_Controller {

	function __construct(){
		parent::__construct();	
		
	}

	public function index()
	{
		echo '관리자 로그인 화면 전환';
	}
}
