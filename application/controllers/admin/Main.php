<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Main extends CI_Controller {

	function __construct(){
		parent::__construct();	
		
	}

	public function index()
	{
		echo $_POST["ss"];
		//echo $_GET["ss"];
		$this->load->view('/admin/main');
	}
}
