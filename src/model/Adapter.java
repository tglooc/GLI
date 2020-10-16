package model;

import java.beans.PropertyChangeListener;
import java.beans.PropertyChangeSupport;

public class Adapter extends CamembertModel {

	private PropertyChangeSupport pcs;

	public Adapter(String title, String unit) {
		super(title, unit);
		this.pcs = new PropertyChangeSupport(this);
	}

	@Override
	public void addItem(Item item) {
		super.addItem(item);
//		System.out.println("call Adapter.addItem");
	}

	@Override
	public void removeItem(Item item) {
		super.removeItem(item);
	}
	
	public void addPropertyChangeListener(PropertyChangeListener pcl) {
		pcs.addPropertyChangeListener(pcl);
	}

	public void removePropertyChangeListener(PropertyChangeListener pcl) {
		pcs.removePropertyChangeListener(pcl);
	}


}
