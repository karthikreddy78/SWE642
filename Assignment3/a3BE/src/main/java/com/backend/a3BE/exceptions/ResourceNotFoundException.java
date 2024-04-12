package com.backend.a3BE.exceptions;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ResourceNotFoundException extends RuntimeException {
	private static final long serialVersionUID = 1L;
	private String _resourceName;
	private String _fieldName;
	private Object _fieldValue;
	
	public ResourceNotFoundException(String resourceName,String fieldName,Object fieldValue) {
		super(String.format("%s not found with %s : '%s'", resourceName,fieldName,fieldValue));
		this._resourceName = resourceName;
		this._fieldName = fieldName;
		this._fieldValue = fieldValue;
	}

	public String get_resourceName() {
		return _resourceName;
	}

	public void set_resourceName(String _resourceName) {
		this._resourceName = _resourceName;
	}

	public String get_fieldName() {
		return _fieldName;
	}

	public void set_fieldName(String _fieldName) {
		this._fieldName = _fieldName;
	}

	public Object get_fieldValue() {
		return _fieldValue;
	}

	public void set_fieldValue(Object _fieldValue) {
		this._fieldValue = _fieldValue;
	}
	
}
