package model;

import java.util.ArrayList;
import java.util.List;

public class CamembertModel implements IModel {

	List<Item> items;
	String title;
	String unit;

	public CamembertModel(String title, String unit) {
		this.title = title;
		this.unit = unit;
		this.items = new ArrayList<>();
	}

	@Override
	public int size() {
		return this.items.size();
	}

	@Override
	public double total() {
		double sum = 0;
		for (Item i : items) {
			sum += i.getValue();
		}
		return sum;
	}

	@Override
	public String getTitle() {
		return this.title;
	}

	@Override
	public String getUnit() {
		return this.unit;
	}

	@Override
	public String getTitle(int i) {
		return items.get(i).getTitle();
	}

	@Override
	public String getDescription(int i) {
		return items.get(i).getDescription();
	}

	@Override
	public double getValues(int i) {
		return items.get(i).getValue();
	}

	// Items functions

//	private Item getItem(int i) {
//		Iterator<Item> it = items.iterator();
//		Item item = it.next();
//		for (int j = 1; j < i; j++) {
//			if (it.hasNext())
//				item = it.next();
//			else
//				System.out.println("error : no " + i + "th element");
//		}
//		return item;
//	}

	public void addItem(Item i) {
//		System.out.println("call CamMod.addItem");
		this.items.add(i);
	}

	public void removeItem(Item i) {
		this.items.remove(i);
	}

}
